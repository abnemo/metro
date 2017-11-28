import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { SeasonService } from '../../../../../shared/services/season/season.service';
import { TeamService } from '../../../../../shared/services/team/team.service';
import { TrainingService } from '../../../../../shared/services/training/training.service';
import { UserService } from '../../../../../shared/services/user/user.service';
import { SponsorService } from '../../../../../shared/services/sponsor/sponsor.service';

@Component({

  selector: 'remove-link',
  template: `
    <button *ngIf="object" [class]="cssClass" (click)="remove()"
            title="{{title}} {{'general.buttons.removeLink' | translate}}">
      <i *ngIf="showIcon" class="fa fa-trash"></i>
      <span *ngIf="showText">{{title}} {{'general.buttons.removeLink' | translate}}</span>
    </button>`
})

export class RemoveLinkComponent implements OnInit {

  @Input() object: any;
  @Input() type: any;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;
  @Input() redirect: boolean = false;

  public title: string = '';

  constructor(private router: Router,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private clubService: ClubService,
    private locationService: LocationService,
    private memberService: MemberService,
    private sponsorService: SponsorService,
    private teamService: TeamService,
    private trainingService: TrainingService,
    private userService: UserService) {
  }

  ngOnInit() {
    switch (this.type) {
      case 'articles':
        this.title = 'Artikel';
        break;
      case 'categories':
        this.title = 'Kategorie';
        break;
      case 'club':
        this.title = 'Verein';
        break;
      case 'location':
        this.title = 'Spielstätte';
        break;
      case 'members':
        this.title = 'Mitglied';
        break;
      case 'sponsors':
        this.title = 'Sponsor';
        break;
      case 'sponsor':
        this.title = 'Sponsor';
        break;
      case 'trainings':
        this.title = 'Training';
        break;
      case 'team':
        this.title = 'Mannschaft';
        break;
      case 'user':
        this.title = 'Benutzer';
        break;
    }
  }

  remove(): any {
    let action;
    switch (this.type) {
      case 'articles':
        action = this.articleService.removeArticle(this.object);
        break;
      case 'categories':
        action = this.categoryService.removeCategory(this.object);
        break;
      case 'clubs':
        action = this.clubService.removeClub(this.object);
        break;
      case 'locations':
        action = this.locationService.removeLocation(this.object);
        break;
      case 'members':
        action = this.memberService.removeMember(this.object);
        break;
      case 'sponsors':
        action = this.sponsorService.removeSponsor(this.object);
        break;
      case 'trainings':
        action = this.trainingService.removeTraining(this.object);
        break;
      case 'team':
        action = this.teamService.removeTeam(this.object);
        break;
      case 'users':
        action = this.userService.removeUser(this.object);
        break;
      default:
        console.log(this.type + ' unknown');
        break;
    }

    if (this.redirect) {
      action.then(() => this.router.navigate([this.type]).then());
    }

  }

}
