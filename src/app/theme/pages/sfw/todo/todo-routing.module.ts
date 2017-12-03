import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const todoRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
