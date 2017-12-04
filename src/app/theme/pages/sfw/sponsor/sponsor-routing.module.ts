import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorResolver } from './sponsor.resolver';

export const routes: Routes = [
  {
    path: '',
    component: SponsorsComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: SponsorEditComponent,
    resolve: {
      sponsor: SponsorResolver
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const sponsorRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
