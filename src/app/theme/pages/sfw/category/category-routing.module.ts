import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from '../../default/default.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryResolver } from './category.resolver';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'edit/:categoryId',
        component: CategoryEditComponent,
        resolve: {
          category: CategoryResolver
        }
      },
      {
        path: 'detail/:categoryId',
        component: CategoryDetailComponent,
        resolve: {
          category: CategoryResolver
        }
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

export const categoryRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
