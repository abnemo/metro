import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { MemberService } from '../shared/services/member/member.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeRoutingModule } from './theme-routing.module';
import { HeaderNavComponent } from './layouts/header-nav/header-nav.component';
import { AsideNavComponent } from './layouts/aside-nav/aside-nav.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {
  AngularFireAuth,
  AngularFireAuthModule
} from 'angularfire2/auth';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationService } from '../shared/services/application/application.service';
import { UnAuthGuard } from '../shared/services/auth/unauth.guard';
import { ApplicationsResolver } from './pages/sfw/setting/applications.resolver';
import { AuthGuard } from '../shared/services/auth/auth.guard';
import { AuthService } from '../shared/services/auth/auth.service';
import { UserService } from '../shared/services/user/user.service';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { CreationModule } from './pages/shared/creation/creation.module';
import { LinkActionModule } from './pages/shared/actions/link-action.module';
import { TableModule } from './pages/shared/table/table.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskModule } from './pages/shared/task/task.module';
import { SharedPagesModule } from './pages/shared/shared-pages.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { QuickSidebarComponent } from './layouts/quick-sidebar/quick-sidebar.component';
import { TooltipsComponent } from './layouts/tooltips/tooltips.component';
import { ScrollTopComponent } from './layouts/scroll-top/scroll-top.component';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CommonModule,
    NgxPermissionsModule.forRoot(),
    RouterModule,
    SharedModule,
    SharedPagesModule,
    ThemeRoutingModule
    /*
     BsDatepickerModule.forRoot(),
    ChartistModule,
    EditorModule,
    FormsModule,
    InputModule,
    MarkdownToHtmlModule.forRoot(),
    MediaModule,
    SidebarModule.forRoot(),
    TimeLineModule, */
  ],
  declarations: [
    AsideNavComponent,
    FooterComponent,
    HeaderNavComponent,
    MainPageComponent,
    QuickSidebarComponent,
    ScrollTopComponent,
    ThemeComponent,
    TooltipsComponent
  ],
  exports: [
    CommonModule,
    CreationModule,
    LinkActionModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TableModule,
    TaskModule
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
  ]
})
export class ThemeModule {
}
