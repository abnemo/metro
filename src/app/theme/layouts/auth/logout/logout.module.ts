import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './logout-routing.routing';
import { AlertComponent } from '../../../../shared/_directives/alert/alert.component';
import { LogoutComponent } from '../logout/logout.component';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UnAuthGuard } from '../../../../shared/services/auth/unauth.guard';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { UserService } from '../../../../shared/services/user/user.service';
import { SharedAuthModule } from '../shared-auth.module';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedAuthModule
  ],
  providers: [
    AngularFireAuthProvider,
    AuthService,
    AlertService,
    UnAuthGuard,
    UserService
  ],
  exports: [],
  entryComponents: [
    AlertComponent
  ]
})

export class LogoutModule {
}
