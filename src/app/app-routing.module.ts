import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './theme/layouts/auth/logout/logout.component';
import { ApplicationsResolver } from './theme/pages/sfw/setting/applications.resolver';
import { SharedModule } from './shared/shared.module';
import { UnAuthGuard } from './shared/services/auth/unauth.guard';
import { AuthGuard } from './shared/services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './theme/layouts/auth/auth.module#AuthModule',
    resolve: {
      application: ApplicationsResolver
    },
    canActivate: [UnAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
