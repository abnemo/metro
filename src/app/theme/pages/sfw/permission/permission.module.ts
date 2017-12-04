import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { NoPermissionsComponent } from './no-permissions/no-permissions.component';
import { SharedPagesModule } from '../../shared/shared-pages.module';

const routes: Routes = [
  {
    path: '',
    component: NoPermissionsComponent
  }
];

@NgModule({
  imports: [
    SharedPagesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    NoPermissionsComponent
  ]
})
export class PermissionModule {
}
