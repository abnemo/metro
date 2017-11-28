import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('de-de');

@Component({
  selector: 'publication-date',
  templateUrl: 'publication-date.component.html'
})
export class PublicationDateComponent {

  @Input() publication: string;

  public moment: any;

  public constructor() {
    this.moment = moment;
  }

}
