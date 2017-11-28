import { NgModule } from '@angular/core';
import { teamRoutingModule } from './team-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamResolver } from './team.resolver';
import { TeamService } from '../../../../shared/services/team/team.service';
import { TrainingService } from '../../../../shared/services/training/training.service';
import { SeasonService } from '../../../../shared/services/season/season.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { CategoryService } from '../../../../shared/services/category/category.service';
import { CompetitionService } from '../../../../shared/services/competition/competition.service';
import { SharedModule } from '../../../../shared/shared.module';
import { LayoutModule } from '../../../layouts/layout.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamItemComponent } from './team-item/team-item.component';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    teamRoutingModule
  ],
  declarations: [
    TeamItemComponent,
    TeamListComponent,
    TeamsComponent,
    /*eamDetailComponent,
    TeamEditComponent,
    TeamFormComponent,
    TeamMediaComponent,
    TeamOfTheMonthComponent,
    TeamPlayerListComponent,
    TeamPositionsComponent,
    TeamsComponent,
    TeamTimelineComponent,
    TeamTimelineFormComponent,
    TeamTimelineListComponent,
    TeamTrainingFormComponent,
    TeamTrainingListComponent,
    TeamMemberListComponent,
    TeamStatisticsComponent,
    TeamCompetitionsComponent,
    TeamMainCompetitionComponent */
  ],
  providers: [
    CompetitionService,
    TeamResolver,
    TeamService,
    TrainingService,
    SeasonService,
    UserService,
    CategoryService
  ]
})

export class TeamModule {
}
