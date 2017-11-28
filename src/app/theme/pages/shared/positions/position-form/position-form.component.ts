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
import { IPosition } from '../../../../../shared/interfaces/club-management-position.interface';
import { ClubManagementService } from '../../../../../shared/services/club-management/club-management.service';
import { IMember } from '../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'position-form',
  templateUrl: './position-form.component.html'
})
export class PositionFormComponent implements OnInit {

  @Input() item: any;
  @Input() itemType: string;
  @Input() members: IMember[];
  @Input() showMembersFromList: boolean = false;
  @Input() showPositionsFromList: boolean = false;

  @Output() toggleForm: EventEmitter<any> = new EventEmitter(false);

  public managementGroup: FormGroup;
  public position: IPosition;

  constructor(private fb: FormBuilder, public clubManagementService: ClubManagementService) {
  }

  ngOnInit() {
    this.managementGroup = this.fb.group({
      assignedMember: ['', [Validators.required]],
      position: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: '',
      description: '',
      club: '',
    });

    this.managementGroup.valueChanges.debounceTime(500).subscribe((values: any) => {
      this.position = {
        title: values.title,
        assignedItem: this.item.id,
        assignedClub: values.club,
        assignedMember: values.assignedMember,
        assignedItemType: this.itemType,
        startDate: values.startDate,
        endDate: values.endDate,
        description: values.description,
        isInternMember: this.showMembersFromList,
        isSavedPosition: this.showPositionsFromList
      };
    });
  }

  cancel() {
    this.toggleForm.emit();
  }

}
