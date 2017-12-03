import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth/auth.guard';
// import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    canActivate: [AuthGuard /*, NgxPermissionsGuard*/],
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/sfw/dashboard/dashboard.module#DashboardModule'
      }/*,
      {
        path: 'todos',
        loadChildren: './pages/sfw/todo/todo.module#TodoModule'
      },
      {
        path: 'articles',
        loadChildren: './pages/sfw/article/article.module#ArticleModule'
      },
      {
        path: 'categories',
        loadChildren: './pages/sfw/category/category.module#CategoryModule'
      },
      {
        path: 'clubs',
        loadChildren: './pages/sfw/club/club.module#ClubModule'
      },
      {
        path: 'locations',
        loadChildren: './pages/sfw/location/location.module#LocationModule'
      },
      {
        path: 'members',
        loadChildren: './pages/sfw/member/member.module#MemberModule'
      },
      {
        path: 'settings',
        loadChildren: './pages/sfw/setting/setting.module#SettingModule'
      },
      {
        path: 'sponsors',
        loadChildren: './pages/sfw/sponsor/sponsor.module#SponsorModule'
      },
      {
        path: 'teams',
        loadChildren: './pages/sfw/team/team.module#TeamModule'
      },
      {
        path: 'users',
        loadChildren: './pages/sfw/user/user.module#UserModule'
      },
      {
        path: '404',
        loadChildren: './pages/default/not-found/not-found/not-found.module#NotFoundModule'
      }*/,
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
  /*
 } ,
 {
   path: '403',
   component: ThemeComponent,
   canActivate: [AuthGuard],
   'children': [
     {
       path: '',
       loadChildren: './pages/sfw/permission/permission.module#PermissionModule'
     }
   ]
 }*/,
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThemeRoutingModule {
}
