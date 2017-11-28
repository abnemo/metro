import {
  Component,
  Input
} from '@angular/core';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';
import { FormGroup } from '@angular/forms';
import { ArticleService } from '../../../../../../shared/services/article/article.service';
import { TeamService } from '../../../../../../shared/services/team/team.service';
import { LocationService } from '../../../../../../shared/services/location/location.service';
import { SponsorService } from '../../../../../../shared/services/sponsor/sponsor.service';
import * as moment from 'moment';
import 'moment/min/locales';
import { ISeason } from '../../../../../../shared/interfaces/season.interface';

moment.locale('de-de');

@Component({
  selector: 'category-assign-objects',
  templateUrl: './category-assign-objects.component.html'
})
export class CategoryAssignObjectsComponent {

  @Input() categoryTypes: ICategoryType[];
  @Input() seasons: ISeason[];
  @Input() assignedCategoryType: string;
  @Input() form: FormGroup;

  public moment: any;

  constructor(public articleService: ArticleService,
    public teamService: TeamService,
    public locationService: LocationService,
    public sponsorService: SponsorService) {
    this.moment = moment;
  }

}
