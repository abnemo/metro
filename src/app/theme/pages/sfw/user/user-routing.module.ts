import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ModuleWithProviders } from '@angular/core';
import { UserResolver } from './user.resolver';
import { UserEditMainProfileComponent } from './user-edit/user-edit-main-profile/user-edit-main-profile.component';
import { UserEditAssignedArticlesComponent }
from './user-edit/user-edit-assigned-articles/user-edit-assigned-articles.component';
import { UserEditAssignedTodosComponent }
from './user-edit/user-edit-assigned-todos/user-edit-assigned-todos.component';
import { UserEditAssignedUploadsComponent }
from './user-edit/user-edit-assigned-uploads/user-edit-assigned-uploads.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'edit/:userId',
    component: UserEditComponent,
    resolve: {
      user: UserResolver
    },
    children: [
      {
        path: '',
        component: UserEditMainProfileComponent
      },
      {
        path: 'articles',
        component: UserEditAssignedArticlesComponent
      },
      {
        path: 'todos',
        component: UserEditAssignedTodosComponent
      },
      {
        path: 'uploads',
        component: UserEditAssignedUploadsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'detail/:userId',
    component: UserDetailComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const userRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
