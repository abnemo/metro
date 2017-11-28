import {
  RouterModule,
  Routes
} from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from '../../default/default.component';
import { ClubResolver } from './club.resolver';
import { ClubEditComponent } from './club-edit/club-edit.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ClubsComponent
      },
      {
        path: 'edit/:clubId',
        component: ClubEditComponent,
        resolve: {
          club: ClubResolver
        }
      },
      {
        path: 'detail/:clubId',
        component: ClubDetailComponent,
        resolve: {
          club: ClubResolver
        },
        children: [
          {
            path: 'honorary',
            // outlet: 'honorary',
            loadChildren: './honorary/honorary.module#HonoraryModule'
          },
          {
            path: '',
            redirectTo: 'honorary'
          }
        ]
      },
      {
        path: 'positions',
        loadChildren: './club-management/club-management.module#ClubManagementModule'
      }/*,

      {
        path: 'positions',
        loadChildren: './club-position/club-position.module#ClubPositionModule'
      },
      {
        path: 'media/:clubId',
        component: ClubMediaComponent,
        resolve: {
          club: ClubResolver
        }
      },
      {
        path: 'stadium/:clubId',
        component: ClubStadiumComponent,
        resolve: {
          club: ClubResolver
        }
      }*/,
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

export const clubRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
