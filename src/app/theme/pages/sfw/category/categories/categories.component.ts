import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { SponsorService } from '../../../../../shared/services/sponsor/sponsor.service';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { TeamService } from '../../../../../shared/services/team/team.service';
import { ArticleService } from '../../../../../shared/services/article/article.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoriesComponent {

  constructor(public categoryTypeService: CategoryTypeService,
    public categoryService: CategoryService,
    public locationService: LocationService,
    public teamService: TeamService,
    public articleService: ArticleService,
    public sponsorService: SponsorService) {
  }

}
