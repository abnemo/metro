import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DefaultComponent } from '../../default/default.component';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorResolver } from './sponsor.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'list',
        component: SponsorsComponent
      },
      {
        path: 'edit/:id',
        component: SponsorEditComponent,
        resolve: {
          sponsor: SponsorResolver
        }
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

export const sponsorRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
