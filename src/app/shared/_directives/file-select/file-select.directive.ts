import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FileUploader } from '../../services/media/media-uploader.service';

@Directive({
  /* tslint:disable */
  selector: '[ng2FileSelect]'
})
export class FileSelectDirective {
  @Input() public uploader: FileUploader;

  private element: ElementRef;

  public constructor(element: ElementRef) {
    this.element = element;
  }

  public getOptions(): any {
    return this.uploader.options;
  }

  public isEmptyAfterSelection(): boolean {
    return !!this.element.nativeElement.attributes.multiple;
  }

  @HostListener('change')
  public onChange(): any {
    const files = this.element.nativeElement.files;
    const options = this.getOptions();
    this.uploader.addToQueue(files, options);
    if (this.isEmptyAfterSelection()) {
    }
  }
}
