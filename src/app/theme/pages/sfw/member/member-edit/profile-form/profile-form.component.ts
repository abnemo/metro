import {
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { MemberEditComponent } from '../member-edit.component';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      /* tslint:disable */
      useExisting: forwardRef(() => MemberEditComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: MemberEditComponent,
      multi: true
    }
  ]
})
export class ProfileFormComponent implements ControlValueAccessor {

  @Input() form: FormGroup;

  constructor() {
  }

  public writeValue(value: any) {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched() {
  }

}
