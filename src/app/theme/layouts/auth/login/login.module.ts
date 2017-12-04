import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './login-routing.routing';
import { AlertComponent } from '../../../../shared/_directives/alert/alert.component';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UnAuthGuard } from '../../../../shared/services/auth/unauth.guard';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { UserService } from '../../../../shared/services/user/user.service';
import { ApplicationService } from '../../../../shared/services/application/application.service';
import { SharedAuthModule } from '../shared-auth.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedAuthModule
  ],
  providers: [
    AngularFireAuthProvider,
    ApplicationService,
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

export class LoginModule {
}
