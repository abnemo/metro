import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationMediaComponent } from './location-media/location-media.component';
import { LocationResolver } from './location.resolver';
import { ModuleWithProviders } from '@angular/core';
import { LocationMapComponent } from './location-map/location-map.component';

export const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: LocationEditComponent,
    resolve: {
      location: LocationResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: LocationDetailComponent,
    resolve: {
      location: LocationResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'media/:id',
    component: LocationMediaComponent,
    resolve: {
      location: LocationResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: LocationMapComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const locationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
