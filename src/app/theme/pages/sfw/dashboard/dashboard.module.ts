import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { weatherConfig } from '../../../../config/weather.config';
import { UpcomingBirthdaysComponent } from '../../shared/birthday/upcoming-birthdays/upcoming-birthdays.component';
import { ThemeModule } from '../../../theme.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../shared/shared.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    AngularWeatherWidgetModule.forRoot({
      key: weatherConfig.apiKey,
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    }),
    dashboardRoutingModule,
    TranslateModule
  ],
  declarations: [
    IndexComponent,
    StatisticsComponent,
    // UpcomingBirthdaysComponent
  ],
  providers: [
  ]
})
export class DashboardModule {
}
