import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SponsorService } from '../../../../shared/services/sponsor/sponsor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/take';
import { ISponsor } from '../../../../shared/interfaces/sponsor.interface';

@Injectable()
export class SponsorResolver implements Resolve<ISponsor> {

  constructor(private sponsorService: SponsorService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISponsor> {
    return this.sponsorService.getSponsorById(route.params['id']).take(1).map((sponsor: ISponsor) => {
      if (sponsor) {
        return sponsor;
      } else if (route.params['id'] === 'new') {
        return this.sponsorService.setNewSponsor();
      } else {
        this.router.navigate(['../list']).then();
      }
    }
    );
  }


}
