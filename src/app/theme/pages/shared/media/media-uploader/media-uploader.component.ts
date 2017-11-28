import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploaderOptions } from '../../../../../shared/interfaces/file/file-uploader-options.interface';
import { FileUploader } from '../../../../../shared/services/media/media-uploader.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { FileItem } from '../../../../../shared/interfaces/file/file-item.interface';
import { MediaItemService } from '../../../../../shared/services/media/media-item.service';
import { IMediaItem } from '../../../../../shared/interfaces/media-item.interface';
import { AuthService } from '../../../../../shared/services/auth/auth.service';

@Component({
  selector: 'media-uploader',
  templateUrl: 'media-uploader.component.html',
  styleUrls: [
    'media-uploader.component.css'
  ]
})
export class MediaUploaderComponent implements OnInit {

  @Input() uploaderOptions: FileUploaderOptions = {
    uploadFolder: '',
    showQueue: false,
    showDropZone: false,
    multipleUpload: false
  };
  @Input() objectId: string;
  @Input() objectType: string;

  @Output() uploadCompleted = new EventEmitter(false);
  @Output() onBeforeUploadItem = new EventEmitter(false);

  public hasBaseDropZoneOver: boolean = false;
  public uploader: FileUploader;

  public showUploader: boolean = false;
  public showLinkUploader: boolean = false;

  constructor(private mediaItemService: MediaItemService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.uploader = new FileUploader(this.uploaderOptions);

    this.uploader.onSuccessItem = (fileItem: FileItem): void => {
      this.mediaUploadCompleted(fileItem).then((mediaItem: IMediaItem) => {
        this.uploadCompleted.emit({
          fileItem: fileItem,
          mediaItem: mediaItem
        });
      });
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  toggleUploader() {
    this.showLinkUploader = false;
    this.showUploader = !this.showUploader;
  }

  toggleLinkUploader() {
    this.showUploader = false;
    this.uploader.queue = null;
    this.showLinkUploader = !this.showLinkUploader;
  }

  mediaUploadCompleted(fileItem): Promise<IMediaItem> {
    const mediaItem: IMediaItem = {
      title: fileItem.file.name,
      description: ' ',
      assignedItemType: this.objectType,
      assignedItem: this.objectId,
      fileSize: fileItem.file.size,
      fileType: fileItem.file.type,
      url: fileItem.url,
      fileCredits: fileItem.credits ? fileItem.credits : '',
      creation: this.authService.getCreation(),
      isExternal: fileItem.isExternal ? fileItem.isExternal : false
    };
    return this.mediaItemService.createMediaItem(mediaItem).then(() => {
      return mediaItem;
    });
  }

}
