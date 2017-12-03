import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserResolver } from './user.resolver';

import { SharedModule } from '../../../../shared/shared.module';
import { userRoutingModule } from './user-routing.module';
import { UserEditMainProfileComponent } from './user-edit/user-edit-main-profile/user-edit-main-profile.component';
import { UserEditAssignedArticlesComponent }
from './user-edit/user-edit-assigned-articles/user-edit-assigned-articles.component';
import { UserEditAssignedTodosComponent }
from './user-edit/user-edit-assigned-todos/user-edit-assigned-todos.component';
import { UserEditAssignedUploadsComponent }
from './user-edit/user-edit-assigned-uploads/user-edit-assigned-uploads.component';

@NgModule({
  imports: [
    SharedModule,
    userRoutingModule
  ],
  declarations: [
    UserDetailComponent,
    UserEditComponent,
    UserEditMainProfileComponent,
    UserItemComponent,
    UserListComponent,
    UsersComponent,
    UserEditAssignedArticlesComponent,
    UserEditAssignedTodosComponent,
    UserEditAssignedUploadsComponent,
  ],
  providers: [
    UserResolver
  ]
})

export class UserModule {
}
