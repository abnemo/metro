import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './theme/theme.module#ThemeModule'
  },
  {
    path: 'login',
    loadChildren: './theme/layouts/auth/auth.module#AuthModule',
    /* resolve: {
      application: ApplicationsResolver
    }*/
  },
  {
    path: 'logout',
    loadChildren: './theme/layouts/auth/auth.module#AuthModule',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, /* { enableTracing: true } */)
  ],
  exports: []
})
export class AppRoutingModule {
}
