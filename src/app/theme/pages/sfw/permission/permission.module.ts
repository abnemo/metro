import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../../default/default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { NoPermissionsComponent } from './no-permissions/no-permissions.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: NoPermissionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    TranslateModule,
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
