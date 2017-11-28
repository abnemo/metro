import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';

@Component({
  selector: 'table-navigation',
  templateUrl: './table-navigation.component.html'
})
export class TableNavigationComponent implements OnInit {

  @Input() items: any[];
  @Input() p: any;
  @Input() searchString: string;
  @Input() currentFilter: string;
  @Input() filteredItems: any[];
  @Input() config: IPagination;

  @Output() pageChange: EventEmitter<any> = new EventEmitter(false);

  constructor() {
  }

  ngOnInit() {
  }


}
