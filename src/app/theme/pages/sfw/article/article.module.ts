import { NgModule } from '@angular/core';
import { articleRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleResolver } from './article.resolver';

import { SharedModule } from '../../../../shared/shared.module';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    articleRoutingModule,
    SharedModule,
    // MarkdownModule,
    // TabsModule,
    // TagInputModule
  ],
  declarations: [
    ArticleItemComponent,
    ArticleListComponent,
    ArticlesComponent
    /* ArticleActionsComponent,
    ArticleDashboardComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
    ArticleFormComponent,
    ArticlesComponent,
    ArticleSidebarComponent,
    ArticleTextComponent,
    EmptyFilterPipe,
    MarkdownPreviewComponent,
    MatchDashboardComponent,
    /* ArticleSidebarComponent,
    ArticleTextComponent,
    // Autosize, */
  ],
  providers: [
    ArticleResolver,
    /*Ng2BootstrapModule,
    UserService,
    CategoryService,
    LocationService,
    MatchService,
    TeamService,
    PublicationService,
    WINDOW_PROVIDER */
  ]
})

export class ArticleModule {
}
