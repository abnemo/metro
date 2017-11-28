import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ITimeLineEvent } from '../../../../shared/interfaces/time-line-event.interface';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html'
})
export class TimeLineComponent {

  @Input() item: any;
  @Input() itemType: string;
  @Input() timeLineEvents: ITimeLineEvent[];

  @Output() removeTimeLineEvent: EventEmitter<any> = new EventEmitter(false);

  showTable: boolean = false;
  showForm: boolean = false;

  constructor() {
  }

  toggleTableView() {
    this.showTable = !this.showTable;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }


}
