import { NgModule } from '@angular/core';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { sponsorRoutingModule } from './sponsor-routing.module';
import { RandomSponsorComponent } from './random-sponsor/random-sponsor.component';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorEditComponent } from './sponsor-edit/sponsor-edit.component';
import { SponsorResolver } from './sponsor.resolver';
import { SponsorEditMainComponent } from './sponsor-edit/sponsor-edit-main/sponsor-edit-main.component';
import { SharedPagesModule } from '../../shared/shared-pages.module';

@NgModule({
  imports: [
    SharedPagesModule,
    sponsorRoutingModule
  ],
  declarations: [
    RandomSponsorComponent,
    SponsorEditComponent,
    SponsorEditMainComponent,
    SponsorListComponent,
    SponsorsComponent
  ],
  providers: [
    SponsorResolver
  ]
})
export class SponsorModule {
}
