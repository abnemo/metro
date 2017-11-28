import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MediaItemService } from '../../../../../shared/services/media/media-item.service';
import { IMediaItem } from '../../../../../shared/interfaces/media-item.interface';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable */
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: '[inline-edit]',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
})
export class InlineEditComponent implements ControlValueAccessor {

  /**
   * https://www.codementor.io/godson.ukpere/creating-an-inline-edit-component-in-angular-2-nmkdlpxtq
   */
  constructor(private mediaItemService: MediaItemService) {
  }

  @ViewChild('inlineEditControl') inlineEditControl: ElementRef;
  @Input() label: string = '';
  @Input() item: IMediaItem;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  private _value: string = '';
  private preValue: string = '';
  public editing: boolean = false;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.editing = false;
  }

  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins
    setTimeout(_ => this.inlineEditControl.nativeElement.focus());
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.item[this.label.toLowerCase()] = this.value;
      this.mediaItemService.updateMediaItem(this.item.id, this.item);
      this.editing = false;
    }
  }

}
