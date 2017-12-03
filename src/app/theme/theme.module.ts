import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { MemberService } from '../shared/services/member/member.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { HeaderNavComponent } from './layouts/header-nav/header-nav.component';
import { AsideNavComponent } from './layouts/aside-nav/aside-nav.component';
import { DefaultComponent } from './pages/sfw/default/default.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationService } from '../shared/services/application/application.service';
import { UnAuthGuard } from '../shared/services/auth/unauth.guard';
import { ApplicationsResolver } from './pages/sfw/setting/applications.resolver';
import { AuthGuard } from '../shared/services/auth/auth.guard';
import { AuthService } from '../shared/services/auth/auth.service';
import { UserService } from '../shared/services/user/user.service';
import { SharedModule } from '../shared/shared.module';

/*
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}; */


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    ThemeRoutingModule
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
    AsideNavComponent,
    DefaultComponent,
    FooterComponent,
    HeaderNavComponent,
    ThemeComponent
    /* AsideNavComponent,
    DefaultComponent,
    FooterComponent,
    LoadingIndicatorComponent,
    ThemeComponent,
    LoadingIndicatorComponent,
    AsideNavComponent,
    DefaultComponent,
    FooterComponent,
    ArticleMatchplanFilterPipe,
    LoadingIndicatorComponent,
    MemberCardComponent,
    NotByFilterPipe,
    ProxyRouteComponent,
    SearchPipe,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent */
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule
    /* LoadingIndicatorComponent,
    NgPipesModule,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent */
  ],
  providers: [
    AngularFireAuth,
    ApplicationsResolver,
    ApplicationService,
    AuthGuard,
    AuthService,
    MemberService,
    UnAuthGuard,
    UserService
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
export class ThemeModule {
}
