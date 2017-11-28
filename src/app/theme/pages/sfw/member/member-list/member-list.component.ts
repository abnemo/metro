import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';
import { IMemberState } from '../../../../../shared/interfaces/member-state.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'member-list',
  templateUrl: 'member-list.component.html'
})

export class MemberListComponent implements OnInit {

  @Input() members: IMember[];
  @Input() clubs: IClub[];
  @Input() clubMemberStates: IMemberState[];
  @Input() ahMemberStates: IMemberState[];

  @Input() filter: string;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  // Pagination
  public p: any;
  public config: IPagination = {
    itemsPerPage: 10,
    currentPage: 1
  };

  public searchString: string = '';
  public currentFilterValue: string = '';
  public currentFilterField: string = 'mainData.firstName';
  public currentFilter: IFilterOption;
  public filterFields = [
    'mainData.firstName', 'mainData.lastName',
    'address.street', 'address.zip', 'address.city', 'address.county'
  ];

  public filterOptions: any = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.clubMemberStates.length; i++) {
      this.filterOptions.push({
        title: 'Verein: ' + this.clubMemberStates[i].title,
        value: 'clubData.status_' + this.clubMemberStates[i].value
      });
    }
    for (let i = 0; i < this.ahMemberStates.length; i++) {
      this.filterOptions.push({
        title: 'AH: ' + this.ahMemberStates[i].title,
        value: 'ahData.status_' + this.ahMemberStates[i].value
      });
    }
  }

  // Table Sorting
  private ordering: string = '';
  public sortOrder: string = 'mainData.lastName';

  toggleOrdering(column) {
    this.ordering = this.ordering === '' ? '-' : '';
    this.sortOrder = this.ordering + column;
    return false;
  }

  public setItemsPerPage(value: number) {
    this.config.itemsPerPage = value;
  }

  // Filter
  public setFilter($event: any) {
    this.currentFilter = $event;
    if ($event) {
      const parts = $event.value.split('_');
      this.currentFilterField = parts[0];
      this.currentFilterValue = parts[1];
    } else {
      this.currentFilterField = 'mainData.firstName';
      this.currentFilterValue = '';
    }
  }

  searchFor($event: string) {
    this.searchString = $event;
  }

  setPage(pageNumber: number) {
    this.config.currentPage = pageNumber;
  }

}
