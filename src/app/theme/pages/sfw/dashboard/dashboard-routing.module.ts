import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from '../../default/default.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'statistics',
        component: StatisticsComponent
      }
    ]
  }
];

export const dashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
