import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { ArticleService } from '../../../../../shared/services/article/article.service';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { ILocation } from '../../../../../shared/interfaces/location.interface';
import { IArticle } from '../../../../../shared/interfaces/article.interface';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { MemberService } from '../../../../../shared/services/member/member.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'location-detail.component.html'
})

export class LocationDetailComponent implements OnInit, OnDestroy {

  location: ILocation;
  articles: IArticle[];
  members: IMember[];

  public p: any;

  public config = {
    id: 'custom',
    itemsPerPage: 25,
    currentPage: 1
  };

  private articleSubscription: ISubscription;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    public categoryService: CategoryService,
    public memberService: MemberService,
    private locationService: LocationService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { location: ILocation }) => {
      this.location = data.location;
    });

    this.articleSubscription = this.articleService.getArticles().subscribe((articles: IArticle[]) =>
      this.articles = articles
    );
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  removeLocation(location: ILocation) {
    this.locationService.removeLocation(location).then(
      () => this.router.navigate(['/locations']).then()
    );
  }

}

