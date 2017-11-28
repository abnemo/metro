import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { TeamResolver } from './team.resolver';
import { DefaultComponent } from '../../default/default.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: TeamsComponent
      }, /*
      {
        path: 'edit/:teamId',
        component: TeamEditComponent,
        resolve: {
          team: TeamResolver
        }
      },
      {
        path: 'detail/:teamId',
        component: TeamDetailComponent,
        resolve: {
          team: TeamResolver
        }
      },
      {
        path: 'media/:teamId',
        component: TeamMediaComponent,
        resolve: {
          team: TeamResolver
        }
      },
      {
        path: 'club-management-statistics',
        component: TeamStatisticsComponent
      }, */
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

export const teamRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);


