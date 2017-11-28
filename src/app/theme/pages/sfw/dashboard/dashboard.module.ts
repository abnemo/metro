import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../../../layouts/layout.module';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    dashboardRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
    StatisticsComponent
  ],
  providers: [
  ]
})
export class DashboardModule {
}
