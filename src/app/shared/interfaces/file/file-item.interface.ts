import { FileLikeObject } from './file-like-object.interface';
import { FileUploader } from '../../services/media/media-uploader.service';
import { FileUploaderOptions } from './file-uploader-options.interface';

export class FileItem {
  public id: string;
  public file: FileLikeObject;
  public _file: File;
  public alias: string;
  public url: any;
  public isExternal: boolean = false;
  public credits: string = '';
  public isReady: boolean = false;
  public isUploading: boolean = false;
  public isUploaded: boolean = false;
  public isSuccess: boolean = false;
  public isCancel: boolean = false;
  public isError: boolean = false;
  public progress: number = 0;
  public index: number = void 0;

  private uploader: FileUploader;
  private some: File;
  private options: FileUploaderOptions;

  public constructor(uploader: FileUploader, some: File, options: FileUploaderOptions) {
    this.uploader = uploader;
    this.some = some;
    this.options = options;
    this.file = new FileLikeObject(some);
    this._file = some;
    if (uploader.options) {
      this.alias = uploader.options.itemAlias || 'file';
    }
    this.url = uploader.options.url;
  }

  public upload(): void {
    try {
      this.uploader.uploadItem(this);
    } catch (e) {
      this.uploader.error = e;
    }
  }

  public cancel(): void {
    this.uploader.cancelItem(this);
  }

  public remove(): void {
    this.uploader.removeFromQueue(this);
  }

  public _onBeforeUpload(): void {
    this.isReady = true;
    this.isUploading = true;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = false;
    this.progress = 0;
  }

  public _onProgress(progress: number): void {
    this.progress = progress;
  }

  public onSuccess(): void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = true;
    this.isCancel = false;
    this.isError = false;
    this.progress = 100;
    this.index = void 0;
  }

  public onError(): void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = true;
    this.isSuccess = false;
    this.isCancel = false;
    this.isError = true;
    this.progress = 0;
    this.index = void 0;
  }

  public onCancel(): void {
    this.isReady = false;
    this.isUploading = false;
    this.isUploaded = false;
    this.isSuccess = false;
    this.isCancel = true;
    this.isError = false;
    this.progress = 0;
    this.index = void 0;
  }

  public onComplete(): void {
    if (this.uploader.options.removeAfterUpload) {
      this.remove();
    }
  }

  public _prepareToUploading(): void {
    this.index = this.index || ++this.uploader._nextIndex;
    this.isReady = true;
  }

}
