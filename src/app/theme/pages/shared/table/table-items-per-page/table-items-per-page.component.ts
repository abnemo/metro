import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';

@Component({
  selector: 'table-items-per-page',
  templateUrl: './table-items-per-page.component.html'
})
export class TableItemsPerPageComponent implements OnInit {

  @Input() itemType: string = '';
  @Input() items: any[];
  @Input() config: IPagination;

  @Output() setItemsPerPage: EventEmitter<number> = new EventEmitter(false);


  public optionsPerPage = [5, 10, 25, 50, 100];

  constructor() { }

  ngOnInit() {
  }

}
