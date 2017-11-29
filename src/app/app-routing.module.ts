import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './theme/layouts/auth/logout/logout.component';
import { ApplicationsResolver } from './theme/pages/sfw/setting/applications.resolver';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './theme/layouts/auth/auth.module#AuthModule',
    resolve: {
      application: ApplicationsResolver
    }
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
