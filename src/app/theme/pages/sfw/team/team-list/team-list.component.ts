import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ITeam } from '../../../../../shared/interfaces/team.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';
import { ISeason } from '../../../../../shared/interfaces/season.interface';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../shared/interfaces/category-type.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'team-list',
  templateUrl: 'team-list.component.html'
})

export class TeamListComponent implements OnChanges {

  @Input() teams: ITeam[];
  @Input() clubs: IClub[];
  @Input() seasons: ISeason[];
  @Input() categories: ICategory[];
  @Input() categoryTypes: ICategoryType[];
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
  public currentFilterField: string = 'title';
  public currentFilter: IFilterOption;
  public filterFields = [
    'title', 'subTitle',
    'address.street', 'address.zip', 'address.city', 'address.county'
  ];
  public filterOptions: any = [];

  constructor() {
  }

  ngOnChanges() {
    if (this.categoryTypes && this.categories) {
      console.log(this.categoryTypes[0].id);
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].assignedCategoryType['id'] === this.categoryTypes[0].id) {
          console.log(this.categories[i].title);
        } else {
          console.log('NOOOOOO ' + this.categories[i].title);
        }

        /* this.filterOptions.push({
          title: 'Verein: ' + this.clubMemberStates[i].title ,
          value: 'clubData.status_' + this.clubMemberStates[i].value
        }); */
      }
      /*for (let i = 0; i < this.ahMemberStates.length; i++) {
        this.filterOptions.push({
          title: 'AH: ' + this.ahMemberStates[i].title ,
          value: 'ahData.status_' + this.ahMemberStates[i].value
        });
      } */
    }
  }

  // Table Sorting
  private ordering: string = '';
  public sortOrder: string = 'title';

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
      this.currentFilterField = 'title';
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
