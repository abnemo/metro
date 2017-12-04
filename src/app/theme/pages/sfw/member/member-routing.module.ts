import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MemberStatisticsComponent } from './member-statistics/member-statistics.component';
import { MemberResolver } from './member.resolver';
import { InterviewEditComponent } from './interview/interview-edit/interview-edit.component';
import { InterviewComponent } from './interview/interview.component';
import { MembersComponent } from './members/members.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent,
    resolve: {
      member: MemberResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: MemberDetailComponent,
    resolve: {
      member: MemberResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'interview/:id',
    component: InterviewComponent,
    resolve: {
      member: MemberResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'interview/:id/create/:interviewId',
    component: InterviewEditComponent,
    resolve: {
      member: MemberResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'statistics',
    component: MemberStatisticsComponent,
    pathMatch: 'full'
  }
];

export const memberRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
