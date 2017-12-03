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
    path: 'list',
    component: LocationsComponent
  },
  {
    path: 'edit/:id',
    component: LocationEditComponent,
    resolve: {
      location: LocationResolver
    }
  },
  {
    path: 'detail/:id',
    component: LocationDetailComponent,
    resolve: {
      location: LocationResolver
    }
  },
  {
    path: 'media/:id',
    component: LocationMediaComponent,
    resolve: {
      location: LocationResolver
    }
  },
  {
    path: 'map',
    component: LocationMapComponent
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

export const locationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
