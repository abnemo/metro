import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../../default/default.component';
import { ModuleWithProviders } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { ApplicationsResolver } from './applications.resolver';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { StaticPageComponent } from './static-pages/static-page/static-page.component';
import { StaticPageResolver } from './static-pages/static-page.resolver';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: SettingsComponent,
        resolve: {
          application: ApplicationsResolver
        }
      },
      {
        path: 'pages',
        component: StaticPagesComponent,
        resolve: {
          application: ApplicationsResolver
        },
        children: [
          {
            path: 'create',
            component: StaticPageComponent,
            resolve: {
              application: ApplicationsResolver,
              staticPage: StaticPageResolver
            }
          },
          {
            path: 'edit/:staticPageId',
            component: StaticPageComponent,
            resolve: {
              application: ApplicationsResolver,
              staticPage: StaticPageResolver
            }
          }
        ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

export const settingsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
