import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';
import { IMediaItem } from '../../../../../../shared/interfaces/media-item.interface';
import { AuthService } from '../../../../../../shared/services/auth/auth.service';

@Component({
  selector: 'media-link-uploader',
  templateUrl: './media-link-uploader.component.html'
})
export class MediaLinkUploaderComponent implements OnInit, OnDestroy {

  public linkUploadGroup: FormGroup;
  public mediaItem: IMediaItem;
  private uploadSubscription: ISubscription;

  constructor(private authService: AuthService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.linkUploadGroup = this.fb.group({
      fileLink: ['', [Validators.required, Validators.pattern('https?://.+')]],
      fileTitle: ['', [Validators.required, Validators.minLength(4)]],
      fileType: [''],
      fileCredits: ['']
    });

    // title: string, fileSize: string, fileType: string, url: string, authorId
    this.uploadSubscription = this.linkUploadGroup.valueChanges.debounceTime(500).subscribe((values: any) => {
      if (values.fileLink !== '') {
        this.mediaItem = {
          title: values.fileType,
          url: values.fileLink,
          description: ' ',
          fileCredits: values.fileCredits,
          fileSize: 0,
          fileType: '',
          creation: this.authService.getCreation(),
          isExternal
          :
          true,
          // ToDo set assignedItem and Type
          assignedItem
          :
          '',
          assignedItemType
          :
          ''
        }
          ;
      }
    });
  }

  ngOnDestroy() {
    this.uploadSubscription.unsubscribe();
  }

  saveMediaItemFromLink() {
    const fileItem = {
      file: {
        'name': this.mediaItem.title,
        'size': this.mediaItem.fileSize,
        'credits': this.mediaItem.fileCredits,
        'type': this.mediaItem.fileType
      },
      'url': this.mediaItem.url,
      'isExternal': true
    };
    return fileItem;
  }

}
