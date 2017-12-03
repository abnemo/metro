import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationsResolver } from '../../pages/sfw/setting/applications.resolver';
import { SharedModule } from '../../../shared/shared.module';
import { UnAuthGuard } from '../../../shared/services/auth/unauth.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
