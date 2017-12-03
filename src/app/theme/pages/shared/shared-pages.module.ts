import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ThemeModule } from '../../theme.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { UserOnlineStatusComponent } from '../sfw/user/user-online-status/user-online-status.component';
import { MemberService } from '../../../shared/services/member/member.service';

/* import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}; */

@NgModule({
  imports: [
    SharedModule,
    ThemeModule
    /*
    AgmCoreModule.forRoot({
      apiKey: googleMapsConfig.apiKey
    }),
     BsDatepickerModule.forRoot(),
    ChartistModule,
    CreationModule,
    EditorModule,
    FormsModule,
    InputModule,
    LinkActionModule,
    MarkdownToHtmlModule.forRoot(),
    MediaModule,
    PerfectScrollbarModule,
    PositionModule,
    PublicationModule,
    SharedModule,
    SidebarModule.forRoot(),
    TableModule,
    TaskModule,
    TimeLineModule, */
  ],
  declarations: [
    /* ArticleMatchplanFilterPipe,
    LoadingIndicatorComponent,
    MemberCardComponent,
    NotByFilterPipe,
    ProxyRouteComponent,
    SearchPipe,
    UserAvatarComponent,
    UserDetailMainComponent,*/
    UserOnlineStatusComponent
  ],
  exports: [
    // Components
    LoadingIndicatorComponent,
    UserOnlineStatusComponent
  ],
  providers: [
    MemberService
    /* {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
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
    TrainingService
    */
  ]
})
export class SharedPagesModule {
}
