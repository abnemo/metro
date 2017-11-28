import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { ICategory } from '../../../../../shared/interfaces/category.interface';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'category-detail.component.html'
})

export class CategoryDetailComponent implements OnInit {

  public category: ICategory;

  constructor(private categoryService: CategoryService,
    public categoryTypeService: CategoryTypeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { category: ICategory }) => this.category = data.category);
  }

  removeCategory(category: ICategory) {
    this.categoryService.removeCategory(category).then(
      () => this.router.navigate(['/categories']).then(),
      (error: any) => console.log(error)
    );
  }

}
