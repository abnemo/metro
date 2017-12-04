import { NgModule } from '@angular/core';
import { teamRoutingModule } from './team-routing.module';
import { TeamsComponent } from './teams/teams.component';

import { TeamListComponent } from './team-list/team-list.component';
import { TeamItemComponent } from './team-item/team-item.component';
import { SharedPagesModule } from '../../shared/shared-pages.module';

@NgModule({
  imports: [
    SharedPagesModule,
    teamRoutingModule
  ],
  declarations: [
    TeamItemComponent,
    TeamListComponent,
    TeamsComponent
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
    /* CompetitionService,
    TeamResolver,
    TeamService,
    TrainingService,
    SeasonService,
    UserService,
    CategoryService */
  ]
})

export class TeamModule {
}
