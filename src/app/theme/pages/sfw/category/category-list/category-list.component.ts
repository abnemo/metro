import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../shared/interfaces/category-type.interface';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { ITeam } from '../../../../../shared/interfaces/team.interface';
import { IArticle } from '../../../../../shared/interfaces/article.interface';
import { ILocation } from '../../../../../shared/interfaces/location.interface';

@Component({
  selector: 'category-list',
  templateUrl: 'category-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryListComponent {

  @Input() categories: ICategory[];
  @Input() categoryTypes: ICategoryType[];

  @Input() teams: ITeam[];
  @Input() articles: IArticle[];
  @Input() locations: ILocation[];

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
  public currentFilter: IFilterOption;
  public filterFields = ['title', 'description', 'assignedCategoryType'];

  constructor(public categoryService: CategoryService) {
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
  public setFilter($event: IFilterOption) {
    this.currentFilter = $event;
    this.currentFilterValue = $event ? $event.value : '';
  }

  searchFor($event: string) {
    this.searchString = $event;
  }

  setPage(pageNumber: number) {
    this.config.currentPage = pageNumber;
  }

}

