import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { UnAuthGuard } from '../../../../shared/services/auth/unauth.guard';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
  {
    path: '',
    component: LogoutComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
