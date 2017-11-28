import { Component } from '@angular/core';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { TeamService } from '../../../../../shared/services/team/team.service';
import { SeasonService } from '../../../../../shared/services/season/season.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'teams.component.html'
})

export class TeamsComponent {

  constructor(public categoryTypeService: CategoryTypeService,
    public categoryService: CategoryService,
    public clubService: ClubService,
    public teamService: TeamService,
    public seasonService: SeasonService) {
  }

}
