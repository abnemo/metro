import { Component, Input } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { TeamService } from '../../../../../shared/services/team/team.service';

@Component({
  selector: 'publication-link',
  template: `
    <button [class]="cssClass" (click)="togglePublication()"
            title=" {{object.publication.status === '0' ? 
                     ('general.buttons.publishLink' | translate) : ('general.buttons.unPublishLink' | translate)}}">
      <i *ngIf="showIcon" [class]="object.publication.status === '0' ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
      <span *ngIf="showText" translate>
        {{object.publication.status === "0" ? 'general.buttons.publishLink' : 'general.buttons.unPublishLink'}}
      </span>
    </button>`
})

export class PublicationLinkComponent {

  @Input() object: any;
  @Input() type: string;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;

  constructor(private authService: AuthService,
    private articleService: ArticleService,
    private locationService: LocationService,
    private teamService: TeamService) {
  }

  getPublicationInfo() {
    if (this.object.publication.from === '') {
      this.object.publication.from = this.authService.id;
      const date = new Date();
      this.object.publication.at = date.toISOString();
      this.object.publication.status = '1';
    } else {
      this.object.publication.from = '';
      this.object.publication.at = '0';
      this.object.publication.status = '0';
    }
  }

  togglePublication() {

    this.getPublicationInfo();

    switch (this.type) {
      case 'articles':
        this.articleService.updateArticle(this.object.id, this.object);
        break;
      case 'locations':
        this.locationService.updateLocation(this.object.id, this.object);
        break;
      case 'teams':
        this.teamService.updateTeam(this.object.id, this.object);
        break;
      default:
        // // console.log(this.type + ' is not defined');
        break;
    }
  }

}
