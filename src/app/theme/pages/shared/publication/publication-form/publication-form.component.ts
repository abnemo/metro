import { Component, Input } from '@angular/core';
import { UserService } from '../../../../../shared/services/user/user.service';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('de-de');

@Component({
  selector: 'publication-form',
  templateUrl: './publication-form.component.html'
})
export class PublicationFormComponent {

  @Input() item: any;

  public config = {
    'format': 'YYYY-MM-DDTHH:mm:ssZZ'
  };

  constructor(public userService: UserService,
    private authService: AuthService) {
  }

  onPublicationChange(value: string) {
    if (value === '0') {
      this.item.publication.at = '';
      this.item.publication.from = '';
    }
    if (value === '1') {
      this.item.publication.from = this.authService.id;
      this.item.publication.at = moment().format(this.config.format);
    }
  }

}
