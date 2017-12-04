import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryResolver } from './category.resolver';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

export const routes: Routes = [

  {
    path: '',
    component: CategoriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:categoryId',
    component: CategoryEditComponent,
    resolve: {
      category: CategoryResolver
    },
    pathMatch: 'full'
  },
  {
    path: 'detail/:categoryId',
    component: CategoryDetailComponent,
    resolve: {
      category: CategoryResolver
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const categoryRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
