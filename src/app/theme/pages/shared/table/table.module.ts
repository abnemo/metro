import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';
import { TableSearchInputComponent } from './table-search-input/table-search-input.component';
import { TableItemsPerPageComponent } from './table-items-per-page/table-items-per-page.component';
import { TableItemFilterComponent } from './table-item-filter/table-item-filter.component';
import { NgPipesModule } from 'ngx-pipes';
import { TableNavigationComponent } from './table-navigation/table-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    NgPipesModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    TableItemFilterComponent,
    TableItemsPerPageComponent,
    TableNavigationComponent,
    TableSearchInputComponent
  ],
  exports: [
    TableItemFilterComponent,
    TableItemsPerPageComponent,
    TableNavigationComponent,
    TableSearchInputComponent
  ],
  providers: [
  ]
})
export class TableModule {
}
