import { NgModule } from '@angular/core';
import { memberRoutingModule } from './member-routing.module';
import { MembersComponent } from './members/members.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberItemComponent } from './member-item/member-item.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberResolver } from './member.resolver';
import { MemberDetailsDFBComponent } from './member-detail/member-details-dfb/member-details-dfb.component';
import { MemberDetailsMainComponent } from './member-detail/member-details-main/member-details-main.component';
import { MemberDetailsDriveComponent } from './member-detail/member-details-drive/member-details-drive.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MainFormComponent } from './member-edit/main-form/main-form.component';
import { DfbFormComponent } from './member-edit/dfb-form/dfb-form.component';
import { InterviewFormComponent } from './interview/interview-edit/interview-form/interview-form.component';
import { InterviewListComponent } from './interview/interview-list/interview-list.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewEditComponent } from './interview/interview-edit/interview-edit.component';
import { MemberStatisticsComponent } from './member-statistics/member-statistics.component';
import { MemberShortStatisticsComponent } from './member-short-statistics/member-short-statistics.component';
import { MemberAhShortStatisticsComponent } from './member-ah-short-statistics/member-ah-short-statistics.component';
import { MemberAhStatisticsComponent } from './member-ah-statistics/member-ah-statistics.component';
import { SharedModule } from '../../../../shared/shared.module';
import { LayoutModule } from '../../../layouts/layout.module';
import { MemberLinkComponent } from './member-link/member-link.component';
import { ProfileFormComponent } from './member-edit/profile-form/profile-form.component';

@NgModule({
  imports: [
    LayoutModule,
    memberRoutingModule,
    SharedModule
  ],
  declarations: [
    DfbFormComponent,
    InterviewComponent,
    InterviewEditComponent,
    InterviewFormComponent,
    InterviewListComponent,
    MainFormComponent,
    MemberAhShortStatisticsComponent,
    MemberAhStatisticsComponent,
    MemberDetailComponent,
    MemberDetailsDFBComponent,
    MemberDetailsDriveComponent,
    MemberDetailsMainComponent,
    MemberEditComponent,
    MemberItemComponent,
    MemberLinkComponent,
    MemberListComponent,
    MembersComponent,
    MemberShortStatisticsComponent,
    MemberStatisticsComponent,
    ProfileFormComponent
  ],
  providers: [
    MemberResolver,
  ]
})

export class MemberModule {
}

