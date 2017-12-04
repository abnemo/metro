import { NgModule } from '@angular/core';
import { categoryRoutingModule } from './category-routing.module';

import { CategoryResolver } from './category.resolver';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-tem/category-item.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryEditMainComponent } from './category-edit/category-edit-main/category-edit-main.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoriesByCategoryTypeComponent }
from './graphs/categories-by-category-type/categories-by-category-type.component';
import { CategoryAssignedObjectsComponent }
from './category-detail/category-assigned-objects/category-assigned-objects.component';
import { CategoryAssignObjectsComponent }
from './category-edit/category-assign-objects/category-assign-objects.component';
import { CategoryDetailMainComponent } from './category-detail/category-detail-main/category-detail-main.component';
import { SharedPagesModule } from '../../shared/shared-pages.module';

@NgModule({
  imports: [
    categoryRoutingModule,
    SharedPagesModule
  ],
  declarations: [
    CategoryAssignObjectsComponent,
    CategoryAssignedObjectsComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CategoryEditMainComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoriesByCategoryTypeComponent,
    CategoriesComponent,
    CategoryDetailMainComponent
  ],
  providers: [
    CategoryResolver
  ]
})

export class CategoryModule {
}
