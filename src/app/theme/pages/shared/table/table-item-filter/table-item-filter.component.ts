import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';

@Component({
  selector: 'table-item-filter',
  templateUrl: './table-item-filter.component.html'
})
export class TableItemFilterComponent implements OnInit {

  @Input() filterOption: string = '';
  @Input() filterValue: string = '';
  @Input() itemType: string = '';

  @Input() filterOptions: any[];
  @Input() currentFilter: IFilterOption = null;

  @Output() setFilter: EventEmitter<any> = new EventEmitter(false);

  public options: IFilterOption[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.filterOptions.length; i++) {
      this.options.push({
        title: this.filterOptions[i][this.filterOption],
        value: this.filterOptions[i][this.filterValue]
      });
    }
  }


}
