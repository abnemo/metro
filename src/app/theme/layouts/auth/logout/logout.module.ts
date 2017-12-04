import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './logout-routing.routing';
import { AlertComponent } from '../../../../shared/_directives/alert/alert.component';
import { LogoutComponent } from '../logout/logout.component';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UnAuthGuard } from '../../../../shared/services/auth/unauth.guard';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { UserService } from '../../../../shared/services/user/user.service';

@NgModule({
  declarations: [
    AlertComponent,
    LogoutComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
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
