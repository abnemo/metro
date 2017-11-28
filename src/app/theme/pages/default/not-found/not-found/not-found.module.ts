import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    'path': '',
    'component': DefaultComponent,
    'children': [
      {
        'path': '',
        'component': NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
