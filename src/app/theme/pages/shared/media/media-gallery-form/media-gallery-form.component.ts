import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MediaGalleryService } from '../../../../../shared/services/media/media-gallery.service';
import { ISubscription } from 'rxjs/Subscription';
import { IMediaGallery } from '../../../../../shared/interfaces/media-gallery.interface';
import { AuthService } from '../../../../../shared/services/auth/auth.service';

@Component({
  selector: 'media-gallery-form',
  templateUrl: './media-gallery-form.component.html'
})
export class MediaGalleryFormComponent implements OnInit, OnDestroy {

  @Input() assignedItem: string;
  @Input() assignedItemType: string;

  @Output() toggleGalleryForm = new EventEmitter(false);

  public form: FormGroup;
  public gallery: IMediaGallery;

  private formSubscription: ISubscription;

  constructor(private mediaGalleryService: MediaGalleryService,
    private authService: AuthService) {
  }

  ngOnInit() {

    this.gallery = {
      title: '',
      assignedItem: this.assignedItem,
      assignedItemType: this.assignedItemType,
      creation: this.authService.getCreation()
    };

    this.form = new FormGroup({
      title: new FormControl('')
    });

    this.formSubscription = this.form.valueChanges.debounceTime(500).subscribe((values: any) => {
      this.gallery.title = values.title;
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  saveMediaGallery() {
    this.mediaGalleryService.createMediaGallery(this.gallery).then(
      () => {
        this.form.reset();
        this.toggleGalleryForm.emit(true);
      },
      (error: any) => console.log(error)
    );
  }

}
