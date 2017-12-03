import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoPermissionsComponent } from './no-permissions/no-permissions.component';

const routes: Routes = [
  {
    path: '',
    component: NoPermissionsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
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
