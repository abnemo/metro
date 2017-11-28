import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { PositionsComponent } from './positions.component';
import { PositionFormComponent } from './position-form/position-form.component';
import { PositionListComponent } from './position-list/position-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    PositionFormComponent,
    PositionListComponent,
    PositionsComponent
  ],
  exports: [
    PositionFormComponent,
    PositionListComponent,
    PositionsComponent
  ]
})

export class PositionModule {
}
