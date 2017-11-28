import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FileUploader } from '../../services/media/media-uploader.service';

@Directive({
  /* tslint:disable */
  selector: '[ng2FileDrop]'
})
export class FileDropDirective {
  @Input() public uploader: FileUploader;
  @Output() public fileOver: EventEmitter<any> = new EventEmitter();
  @Output() public onFileDrop: EventEmitter<File[]> = new EventEmitter<File[]>();

  private element: ElementRef;

  public constructor(element: ElementRef) {
    this.element = element;
  }

  public getOptions(): any {
    return this.uploader.options;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    const transfer = this._getTransfer(event);
    if (!transfer) {
      return;
    }

    const options = this.getOptions();
    this._preventAndStop(event);
    this.uploader.addToQueue(transfer.files, options);
    this.fileOver.emit(false);
    this.onFileDrop.emit(transfer.files);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any): void {
    const transfer = this._getTransfer(event);
    if (!this._haveFiles(transfer.types)) {
      return;
    }

    transfer.dropEffect = 'copy';
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any): any {
    if (event.currentTarget === (this as any).element[0]) {
      return;
    }

    this._preventAndStop(event);
    this.fileOver.emit(false);
  }

  private _getTransfer(event: any): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
  }

  private _preventAndStop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  private _haveFiles(types: any): any {
    if (!types) {
      return false;
    }

    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    } else if (types.contains) {
      return types.contains('Files');
    } else {
      return false;
    }
  }

}
