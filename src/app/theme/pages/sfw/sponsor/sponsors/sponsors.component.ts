import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { SponsorService } from '../../../../../shared/services/sponsor/sponsor.service';
import { ISponsor } from '../../../../../shared/interfaces/sponsor.interface';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './sponsors.component.html'
})
export class SponsorsComponent implements OnInit, OnDestroy {

  public sponsors: ISponsor[];

  private sponsorSubscription: ISubscription;

  constructor(public categoryService: CategoryService,
    public categoryTypeService: CategoryTypeService,
    public sponsorService: SponsorService) {
  }

  ngOnInit() {
    this.sponsorSubscription = this.sponsorService.getSponsors().subscribe((items: ISponsor[]) =>
      this.sponsors = items
    );
  }

  ngOnDestroy() {
    this.sponsorSubscription.unsubscribe();
  }

  removeSponsor(sponsor: ISponsor) {
    this.sponsorService.removeSponsor(sponsor).then(
      () => console.log('ok'),
      (error: any) => console.log(error)
    );
  }

}
