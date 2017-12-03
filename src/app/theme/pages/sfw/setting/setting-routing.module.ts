import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { ApplicationsResolver } from './applications.resolver';

export const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: {
      application: ApplicationsResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const settingsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
