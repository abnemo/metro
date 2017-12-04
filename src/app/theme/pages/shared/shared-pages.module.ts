import { NgModule } from '@angular/core';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { UserOnlineStatusComponent } from '../sfw/user/user-online-status/user-online-status.component';
import { UserDetailMainComponent } from '../sfw/user/user-detail/user-detail-main/user-detail-main.component';
import { UserAvatarComponent } from '../sfw/user/user-avatar/user-avatar.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkActionModule } from './actions/link-action.module';
import { TableModule } from './table/table.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskModule } from './task/task.module';
import { CategoryTypeService } from '../../../shared/services/category-type/category-type.service';
import { ClubService } from '../../../shared/services/club/club.service';
import { LocationService } from '../../../shared/services/location/location.service';
import { SponsorService } from '../../../shared/services/sponsor/sponsor.service';
import { MediaItemService } from '../../../shared/services/media/media-item.service';
import { TeamService } from '../../../shared/services/team/team.service';
import { TrainingService } from '../../../shared/services/training/training.service';
import { SeasonService } from '../../../shared/services/season/season.service';
import { MemberStateService } from '../../../shared/services/member/member-state.service';
import { MemberService } from '../../../shared/services/member/member.service';
import { MediaGalleryService } from '../../../shared/services/media/media-gallery.service';
import { MapsService } from '../../../shared/services/maps/maps.service';
import { FirestoreService } from '../../../shared/services/firestore/firestore.service';
import { ClubManagementService } from '../../../shared/services/club-management/club-management.service';
import { ClubHonoraryService } from '../../../shared/services/club-honorary/club-honorary.service';
import { CategoryService } from '../../../shared/services/category/category.service';
import { ArticleService } from '../../../shared/services/article/article.service';
import {
  NgxPermissionsModule,
  NgxRolesService
} from 'ngx-permissions';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { MediaModule } from './media/media.module';
import { CreationModule } from './creation/creation.module';
import { PublicationModule } from './publication/publication.module';
import { AgmCoreModule } from '@agm/core';
import { googleMapsConfig } from '../../../config/google-maps.config';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: googleMapsConfig.apiKey
    }),
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    LoadingIndicatorComponent,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent
  ],
  exports: [
    CommonModule,
    CreationModule,
    LinkActionModule,
    LoadingIndicatorComponent,
    MediaModule,
    NgPipesModule,
    NgxPaginationModule,
    NgxPermissionsModule,
    PerfectScrollbarModule,
    PublicationModule,
    ReactiveFormsModule,
    TableModule,
    TaskModule,
    UserAvatarComponent,
    UserDetailMainComponent,
    UserOnlineStatusComponent,
    TranslateModule
  ],
  providers: [
    {
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
    NgxRolesService,
    SeasonService,
    SponsorService,
    TeamService,
    TrainingService
  ]
})
export class SharedPagesModule {
}
