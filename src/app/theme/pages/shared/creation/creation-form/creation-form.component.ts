import { Component, Input } from '@angular/core';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'creation-form',
  templateUrl: './creation-form.component.html'
})
export class CreationFormComponent {

  @Input() form: FormGroup;
  @Input() users: IUser[];

  public constructor() {
  }

}
