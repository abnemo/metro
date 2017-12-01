import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.routing';
import { AlertComponent } from '../../../shared/_directives/alert/alert.component';
import { LogoutComponent } from './logout/logout.component';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { UserService } from '../../../shared/services/user/user.service';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { AuthGuard } from '../../../shared/services/auth/auth.guard';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    SharedModule
  ],
  providers: [
    AlertService,
    UserService
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class AuthModule {
}
