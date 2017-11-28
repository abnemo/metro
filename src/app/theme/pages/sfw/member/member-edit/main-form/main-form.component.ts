import {
  Component,
  forwardRef,
  Input,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import * as moment from 'moment';
import 'moment/min/locales';
import { IClub } from '../../../../../../shared/interfaces/club.interface';
import { MemberEditComponent } from '../member-edit.component';
import { MemberStateService } from '../../../../../../shared/services/member/member-state.service';

moment.locale('de-de');

@Component({
  selector: 'main-form',
  templateUrl: './main-form.component.html',
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
export class MainFormComponent implements ControlValueAccessor {

  @Input() clubs: IClub[];
  @Input() form: FormGroup;

  constructor(public memberStateService: MemberStateService) {
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


