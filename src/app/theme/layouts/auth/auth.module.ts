import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.routing';
import { AlertComponent } from '../../../shared/_directives/alert/alert.component';
import { LogoutComponent } from './logout/logout.component';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { UnAuthGuard } from '../../../shared/services/auth/unauth.guard';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { UserService } from '../../../shared/services/user/user.service';


@NgModule({
  declarations: [
    AlertComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule
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

export class AuthModule {
}
