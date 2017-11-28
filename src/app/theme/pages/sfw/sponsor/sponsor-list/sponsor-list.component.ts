import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISponsor } from '../../../../../shared/interfaces/sponsor.interface';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../shared/interfaces/category-type.interface';
import { SponsorService } from '../../../../../shared/services/sponsor/sponsor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { IFilterOption } from '../../../../../shared/interfaces/pagination/filter-option.interface';
import { IPagination } from '../../../../../shared/interfaces/pagination/pagination.interface';

@Component({
  selector: 'sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: [
    'sponsor-list.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SponsorListComponent implements OnInit {

  @Input() sponsors: ISponsor[];
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
  public currentFilter: IFilterOption;
  public filterFields = ['title', 'description', 'externalLink', 'internalInfo'];

  constructor(public sanitizer: DomSanitizer) {
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

  ngOnInit() {
  }

  /*
  setSelectedCategory(category: ICategory) {
    if (category) {
      this.selectedCategory = category.id;
      // this.sponsorService.filterSponsors('assignedCategories_' + category.id);
    } else {
      this.selectedCategory = '';
      // this.sponsorService.filterSponsors('');
    }
  } */

}
