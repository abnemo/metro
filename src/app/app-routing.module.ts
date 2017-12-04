import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './theme/layouts/auth/login/login.module#LoginModule'
    /* resolve: {
      application: ApplicationsResolver
    }*/
  },
  {
    path: 'logout',
    loadChildren: './theme/layouts/auth/logout/logout.module#LogoutModule'
  },
  {
    path: '',
    loadChildren: './theme/theme.module#ThemeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, /*{ enableTracing: environment.routerTracing }*/)
  ],
  exports: []
})
export class AppRoutingModule {
}
