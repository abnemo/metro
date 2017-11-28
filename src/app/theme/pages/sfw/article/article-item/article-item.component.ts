import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { IArticle } from '../../../../../shared/interfaces/article.interface';

@Component({
  selector: '[article-item]',
  templateUrl: 'article-item.component.html',
})

export class ArticleItemComponent {

  @Input() article: IArticle;
  @Input() categories: ICategory[];

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  constructor() {
  }

}
