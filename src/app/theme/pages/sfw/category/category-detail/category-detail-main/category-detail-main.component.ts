import { Component, Input } from '@angular/core';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';

@Component({
  selector: 'category-detail-main',
  templateUrl: './category-detail-main.component.html'
})
export class CategoryDetailMainComponent {

  @Input() category: ICategory;
  @Input() categoryTypes: ICategoryType[];

  constructor() {
  }

}
