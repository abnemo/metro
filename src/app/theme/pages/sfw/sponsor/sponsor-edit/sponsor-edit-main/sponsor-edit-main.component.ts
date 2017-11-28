import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { de } from 'ngx-bootstrap/locale';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISponsor } from '../../../../../../shared/interfaces/sponsor.interface';
import { FileUploaderOptions } from '../../../../../../shared/interfaces/file/file-uploader-options.interface';
import { FileItem } from '../../../../../../shared/interfaces/file/file-item.interface';

defineLocale('de', de);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sponsor-edit-main',
  templateUrl: './sponsor-edit-main.component.html'
})
export class SponsorEditMainComponent implements OnInit {

  @Input() categoryTypes: ICategoryType[];
  @Input() categories: ICategory[];
  @Input() form: FormGroup;
  @Input() sponsor: ISponsor;

  @Output() setLogo: EventEmitter<any> = new EventEmitter(false);
  @Output() cancel: EventEmitter<any> = new EventEmitter(false);

  public objectType: string = 'sponsors';
  public showUploader: boolean = false;

  public uploaderOptions: FileUploaderOptions = {
    removeAfterUpload: true,
    uploadFolder: this.objectType,
    autoUpload: true,
    multipleUpload: false,
    showQueue: false,
    showDropZone: false
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.sponsor.id) {
      this.uploaderOptions.uploadFolder = this.uploaderOptions.uploadFolder + '/' + this.sponsor.id;
    }
  }

  toggleUploader() {
    this.showUploader = !this.showUploader;
  }

  /*
      saveSponsor() {
        let action;
        if (this.sponsor.id) {
          action = this.sponsorService.updateSponsor(this.sponsor.id, this.sponsor);
        } else {
          /*action = this.sponsorService.createSponsor(this.sponsor).then((newSponsor: any) => {
              if (this.updateImageUrlOnSave) {
                /* this.mediaItemService.getMediaItemByProperty('url', this.sponsor.imageUrl).subscribe(
                  (mediaItems: IMediaItem[]) => mediaItems.map((mediaItem: IMediaItem) => {
                    mediaItem.assignedItem = newSponsor.key;
                    this.mediaItemService.updateMediaItem(mediaItem);
                    // ToDo: Move file to folder /sponsor/id/file
                  })
                ); *
              }
            }
          );*
        }
        action.then(() => {
          this.router.navigate(['list']).then();
        });
      }*/

  uploadCompleted(mediaResponse: any) {
    this.setLogo.emit(mediaResponse);
    /*
    this.sponsor.imageUrl = fileItem.url;
    if (this.sponsor.id) {
      this.sponsorService.updateSponsor(this.sponsor.id, this.sponsor);
    } else {
      this.updateImageUrlOnSave = true;
    } */
    this.toggleUploader();
  }

}
