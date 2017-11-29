import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';
import { googleMapsConfig } from '../config/google-maps.config';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChartistModule } from 'ng-chartist';
import { ArticleService } from './services/article/article.service';
import { CategoryService } from './services/category/category.service';
import { CategoryTypeService } from './services/category-type/category-type.service';
import { LocationService } from './services/location/location.service';
import { MemberService } from './services/member/member.service';
import { TeamService } from './services/team/team.service';
import { UserService } from './services/user/user.service';
import { SeasonService } from './services/season/season.service';
import { ClubService } from './services/club/club.service';
import { ClubHonoraryService } from './services/club-honorary/club-honorary.service';
import { ClubManagementService } from './services/club-management/club-management.service';
import { UpcomingBirthdaysComponent }
  from '../theme/pages/shared/birthday/upcoming-birthdays/upcoming-birthdays.component';
import { LinkActionModule } from '../theme/pages/shared/actions/link-action.module';
import { TrainingService } from './services/training/training.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarModule } from 'ng-sidebar';
import { SponsorService } from './services/sponsor/sponsor.service';
import { CreationModule } from '../theme/pages/shared/creation/creation.module';
import { PublicationModule } from '../theme/pages/shared/publication/publication.module';
import { MapsService } from './services/maps/maps.service';
import { AgmCoreModule } from '@agm/core';
import { MediaGalleryService } from './services/media/media-gallery.service';
import { MediaItemService } from './services/media/media-item.service';
import { MediaModule } from '../theme/pages/shared/media/media.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NotByFilterPipe } from './pipes/filter-not-by.pipe';
import { LoadingIndicatorComponent } from '../theme/pages/shared/loading-indicator/loading-indicator.component';
import { ArticleMatchplanFilterPipe } from './pipes/article-matchplan-filter.pipe';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TableModule } from '../theme/pages/shared/table/table.module';
import { InputModule } from '../theme/pages/shared/input/input.module';
import { TimeLineModule } from '../theme/pages/shared/time-line/time-line.module';
import { EditorModule } from '../theme/pages/shared/editor/editor.module';
import { TaskModule } from '../theme/pages/shared/task/task.module';
import { PositionModule } from '../theme/pages/shared/positions/position.module';
import { MemberStateService } from './services/member/member-state.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ProxyRouteComponent } from '../theme/pages/shared/proxy-route/proxy-route.component';
import { ApplicationService } from './services/application/application.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SearchPipe } from './pipes/search.pipe';
import { MemberCardComponent } from '../theme/pages/sfw/member/member-card/member-card.component';
import { UserDetailMainComponent }
  from '../theme/pages/sfw/user/user-detail/user-detail-main/user-detail-main.component';
import { UserOnlineStatusComponent } from '../theme/pages/sfw/user/user-online-status/user-online-status.component';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { weatherConfig } from '../config/weather.config';
import { FirestoreService } from './services/firestore/firestore.service';
import { ApplicationsResolver } from '../theme/pages/sfw/setting/applications.resolver';
import { UserAvatarComponent } from '../theme/pages/sfw/user/user-avatar/user-avatar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: googleMapsConfig.apiKey
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularWeatherWidgetModule.forRoot({
      key: weatherConfig.apiKey,
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    }),
    BsDatepickerModule.forRoot(),
    ChartistModule,
    CommonModule,
    CreationModule,
    EditorModule,
    FormsModule,
    InputModule,
    LinkActionModule,
    MarkdownToHtmlModule.forRoot(),
    MediaModule,
    NgPipesModule,
    PerfectScrollbarModule,
    PositionModule,
    PublicationModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule.forRoot(),
    TableModule,
    TaskModule,
    TimeLineModule,
    TranslateModule
  ],
  declarations: [
    ArticleMatchplanFilterPipe,
    LoadingIndicatorComponent,
    MemberCardComponent,
    NotByFilterPipe,
    ProxyRouteComponent,
    SearchPipe,
    UpcomingBirthdaysComponent,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent
  ],
  exports: [
    ArticleMatchplanFilterPipe,
    LoadingIndicatorComponent,
    MemberCardComponent,
    NotByFilterPipe,
    SearchPipe,
    UpcomingBirthdaysComponent,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent,
    // Module
    AgmCoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularWeatherWidgetModule,
    BsDatepickerModule,
    ChartistModule,
    CommonModule,
    CreationModule,
    EditorModule,
    FormsModule,
    InputModule,
    LinkActionModule,
    MarkdownToHtmlModule,
    MediaModule,
    NgxPaginationModule,
    NgxPermissionsModule,
    NgPipesModule,
    PerfectScrollbarModule,
    PositionModule,
    ProxyRouteComponent,
    PublicationModule,
    ReactiveFormsModule,
    RouterModule,
    SidebarModule,
    TableModule,
    TaskModule,
    TimeLineModule,
    TranslateModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ApplicationsResolver,
    ApplicationService,
    ArticleService,
    CategoryService,
    CategoryTypeService,
    ClubService,
    ClubHonoraryService,
    ClubManagementService,
    FirestoreService,
    LocationService,
    MapsService,
    MediaGalleryService,
    MediaItemService,
    MemberService,
    MemberStateService,
    SeasonService,
    SponsorService,
    TeamService,
    TrainingService,
    UserService
  ]
})

export class SharedModule {
}
