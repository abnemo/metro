import {
  Component,
  Input,
  OnChanges
} from '@angular/core';
import { ArticleService } from '../../../../../../shared/services/article/article.service';
import { LocationService } from '../../../../../../shared/services/location/location.service';
import { SeasonService } from '../../../../../../shared/services/season/season.service';
import { SponsorService } from '../../../../../../shared/services/sponsor/sponsor.service';
import { TeamService } from '../../../../../../shared/services/team/team.service';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';
import { ILocation } from '../../../../../../shared/interfaces/location.interface';
import { ITeam } from '../../../../../../shared/interfaces/team.interface';
import { IArticle } from '../../../../../../shared/interfaces/article.interface';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';
import { ISponsor } from '../../../../../../shared/interfaces/sponsor.interface';

@Component({
  selector: 'category-assigned-objects',
  templateUrl: './category-assigned-objects.component.html'
})
export class CategoryAssignedObjectsComponent implements OnChanges {

  @Input() category: ICategory;
  @Input() categoryTypes: ICategoryType[];
  @Input() showList: boolean = false;

  public assignedItems: any;

  constructor(public articleService: ArticleService,
    public locationService: LocationService,
    public seasonService: SeasonService,
    public sponsorService: SponsorService,
    public teamService: TeamService) {
  }

  ngOnChanges() {

    if (!this.category || !this.categoryTypes) {
      return;
    }

    const selectedCategoryType = this.categoryTypes.filter((categoryType: ICategoryType) => {
      return this.category.assignedCategoryType === categoryType.id;
    })[0].link;

    const _that = this;

    switch (selectedCategoryType) {
      case 'locations':
        this.locationService.getLocations().subscribe((locations: ILocation[]) => {
          this.assignedItems = locations.filter((location: ILocation) => {
            return location.assignedCategory === this.category.id;
          });
        });
        break;
      case 'teams':
        this.teamService.getTeams().subscribe((teams: ITeam[]) => {
          this.assignedItems = teams.filter((team: ITeam) => {
            return Object.keys(team.assignedCategories).some((key) => {
              return team.assignedCategories[key] === _that.category.id;
            });
          });
        });
        break;
      case 'articles':
        this.articleService.getArticles().subscribe((articles: IArticle[]) => {
          this.assignedItems = articles.filter((article: IArticle) => {
            return Object.keys(article.assignedCategories).some((key) => {
              return article.assignedCategories[key] === _that.category.id;
            });
          });
        });
        break;
      case 'sponsors':
        this.sponsorService.getSponsors().subscribe((sponsors: ISponsor[]) => {
          this.assignedItems = sponsors.filter((sponsor: ISponsor) => {
            return Object.keys(sponsor.assignedCategories).some((key) => {
              return sponsor.assignedCategories[key] === _that.category.id;
            });
          });
        });
        break;
    }
  }

}
