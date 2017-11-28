import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ICategoryType } from '../../../../../shared/interfaces/category-type.interface';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { ITeam } from '../../../../../shared/interfaces/team.interface';
import { IArticle } from '../../../../../shared/interfaces/article.interface';
import { ILocation } from '../../../../../shared/interfaces/location.interface';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { TeamService } from '../../../../../shared/services/team/team.service';

@Component({
  selector: '[category-item]',
  templateUrl: 'category-item.component.html',
})

export class CategoryItemComponent implements OnChanges {

  @Input() category: ICategory;
  @Input() categoryTypes: ICategoryType[];

  @Input() teams: ITeam[];
  @Input() articles: IArticle[];
  @Input() locations: ILocation[];

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  public assignedItems: number;

  constructor(public sanitizer: DomSanitizer,
    public articleService: ArticleService,
    public teamService: TeamService,
    public locationService: LocationService) {
  }

  ngOnChanges() {
    let items = [];
    const _that = this;

    switch (this.category.assignedCategoryType.link) {
      case 'locations':
        items = this.locations.filter((location: ILocation) => {
          return location.assignedCategory === this.category.id;
        });
        break;
      case 'teams':
        items = this.teams.filter((team: ITeam) => {
          return Object.keys(team.assignedCategories).some((key) => {
            return team.assignedCategories[key] === _that.category.id;
          });
        });
        break;
      case 'articles':
        items = this.articles.filter((article: IArticle) => {
          return Object.keys(article.assignedCategories).some((key) => {
            return article.assignedCategories[key] === _that.category.id;
          });
        });
        break;
    }
    this.assignedItems = items.length;
  }

}
