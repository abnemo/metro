import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const dashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
