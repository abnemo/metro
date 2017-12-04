import { NgModule } from '@angular/core';
import { LocationItemComponent } from './location-item/location-item.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationsComponent } from './locations/locations.component';
import { locationRoutingModule } from './location-routing.module';
import { LocationResolver } from './location.resolver';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../../../../shared/shared.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationDetailMainComponent } from './location-detail/location-detail-main/location-detail-main.component';
import { LocationDetailMapComponent } from './location-detail/location-detail-map/location-detail-map.component';
import { LocationDetailMediaComponent } from './location-detail/location-detail-media/location-detail-media.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationEditAddressComponent } from './location-edit/location-edit-address/location-edit-address.component';
import { LocationEditMainComponent } from './location-edit/location-edit-main/location-edit-main.component';
import { LocationEditContactComponent } from './location-edit/location-edit-contact/location-edit-contact.component';
import { LocationDetailContactComponent } from
  './location-detail/location-detail-contact/location-detail-contact.component';
import { LocationMediaComponent } from './location-media/location-media.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { LocationContactListComponent } from './location-contact-list/location-contact-list.component';
import { SharedPagesModule } from '../../shared/shared-pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AgmCoreModule,
    HttpClientModule,
    locationRoutingModule,
    SharedPagesModule
  ],
  declarations: [
    LocationDetailComponent,
    LocationDetailContactComponent,
    LocationDetailMediaComponent,
    LocationDetailMainComponent,
    LocationDetailMapComponent,
    LocationEditComponent,
    LocationEditAddressComponent,
    LocationEditContactComponent,
    LocationEditMainComponent,
    LocationItemComponent,
    LocationListComponent,
    LocationMapComponent,
    LocationMediaComponent,
    LocationsComponent,
    LocationContactListComponent
  ],
  providers: [
    LocationResolver
  ]
})
export class LocationModule {
}
