import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

  {
    path: '',
    component: ArticlesComponent,
    pathMatch: 'full'
  }, /*
      {
        path: 'dashboard',
        component: ArticleDashboardComponent
      },
      {
        path: 'match-dashboard',
        component: MatchDashboardComponent
      },
      {
        path: 'edit/:id',
        component: ArticleEditComponent,
        resolve: {
          article: ArticleResolver
        }
      },
      {
        path: 'detail/:id',
        component: ArticleDetailComponent,
        resolve: {
          article: ArticleResolver
        }
      }*/
  {
    path: '**',
    redirectTo: ''
  }
];

export const articleRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

