import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import * as moment from 'moment';
import 'moment/min/locales';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '[user-item]',
  templateUrl: 'user-item.component.html'
})

export class UserItemComponent {

  @Input() user: IUser;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  public moment: any;

  constructor(public authService: AuthService) {
    this.moment = moment;
  }

}
