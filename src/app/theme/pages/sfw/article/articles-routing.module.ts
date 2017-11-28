import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleResolver } from './article.resolver';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from '../../default/default.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ArticlesComponent
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
    ]
  }
];

export const articleRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

