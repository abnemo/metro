import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { ITimeLineEvent } from '../../../../../shared/interfaces/time-line-event.interface';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'time-line-form',
  templateUrl: './time-line-form.component.html'
})
export class TimeLineFormComponent implements OnInit {

  @Input() item: any;
  @Input() itemType: string;
  @Input() showForm: boolean;
  @Output() toggleForm = new EventEmitter(false);

  public timeLineGroup: FormGroup;
  public timeLineEvent: ITimeLineEvent;

  public colors = ['primary', 'warning', 'danger', 'success', 'info', 'none'];
  public config = {
    // uiColor: '#99000'
  };

  constructor(private fb: FormBuilder,
    private afs: AngularFirestore,
    private authService: AuthService,
    private clubService: ClubService,
    public articleService: ArticleService) {
  }

  ngOnInit() {

    if (this.itemType === 'club') {
      this.timeLineGroup = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        subTitle: '',
        text: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(500)]],
        icon: '',
        color: '',
        date: ['', [Validators.required]],
        assignedArticle: ''
      });

      this.timeLineGroup.valueChanges.debounceTime(500).subscribe((values: any) => {
        this.timeLineEvent = {
          title: values.title,
          subTitle: values.subTitle,
          text: values.text,
          assignedItem: this.item.id,
          assignedItemType: this.itemType,
          date: values.date,
          icon: values.icon,
          color: values.color,
          creation: this.authService.getCreation(),
          assignedArticle: values.assignedArticle
        };
      });
    } else if (this.itemType === 'club-management') {
      this.timeLineGroup = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        date: ['', [Validators.required]],
        till: '',
        icon: '',
        color: '',
        assignedArticle: ''
      });

      this.timeLineGroup.valueChanges.debounceTime(500).subscribe((values: any) => {
        this.timeLineEvent = {
          title: values.title,
          assignedItem: this.item.id,
          assignedItemType: this.itemType,
          date: values.date,
          till: values.till,
          icon: values.icon,
          color: values.color,
          creation: this.authService.getCreation(),
          assignedArticle: values.assignedArticle
        };
      });

    }
  }


  saveTimeLineEvent() {
    let action: any;

    this.timeLineEvent.id = this.afs.createId();

    switch (this.itemType) {

      // Wichtige Ereignisse im Verein
      case 'club':
        this.item.assignedClubEvents.push(this.timeLineEvent);
        action = this.clubService.updateClub(this.item.id, this.item);
        break;

      // Vorstandsvorsitzende
      case 'club-management':
        this.item.management.assignedManagementEvents.push(this.timeLineEvent);
        action = this.clubService.updateClub(this.item.id, this.item);
    }

    action.then(
      () => this.toggleForm.emit(),
      (error: any) => console.log(error)
    );
  }

}
