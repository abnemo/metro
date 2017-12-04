import { Component } from '@angular/core';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { SeasonService } from '../../../../../shared/services/season/season.service';

@Component({
  // selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './articles.component.html'
})

export class ArticlesComponent {

  constructor(public articleService: ArticleService,
    public categoryService: CategoryService,
    public seasonService: SeasonService) {
  }

}
