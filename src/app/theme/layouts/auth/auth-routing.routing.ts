import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationsResolver } from '../../pages/sfw/setting/applications.resolver';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
