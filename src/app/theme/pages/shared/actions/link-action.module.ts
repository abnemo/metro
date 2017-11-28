import { NgModule } from '@angular/core';
import { DetailLinkComponent } from './detail-link/detail-link.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { ListLinkComponent } from './list-link/list-link.component';
import { RemoveLinkComponent } from './remove-link/remove-link';
import { PublicationLinkComponent } from './publication-link/publication-link.component';
import { MediaLinkComponent } from './media-link/edit-link.component';
import { CategoryService } from '../../../../shared/services/category/category.service';
import { ArticleService } from '../../../../shared/services/article/article.service';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MemberService } from '../../../../shared/services/member/member.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    DetailLinkComponent,
    EditLinkComponent,
    ListLinkComponent,
    MediaLinkComponent,
    PublicationLinkComponent,
    RemoveLinkComponent
  ],
  exports: [
    DetailLinkComponent,
    EditLinkComponent,
    ListLinkComponent,
    MediaLinkComponent,
    PublicationLinkComponent,
    RemoveLinkComponent
  ],
  providers: [
    ArticleService,
    AuthService,
    CategoryService,
    MemberService,
    UserService,
  ]
})
export class LinkActionModule {
}
