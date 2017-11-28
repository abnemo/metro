import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { LocationService } from '../../../../shared/services/location/location.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/take';
import { ILocation } from '../../../../shared/interfaces/location.interface';

@Injectable()
export class LocationResolver implements Resolve<ILocation> {

  constructor(private locationService: LocationService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocation> {
    return this.locationService.getLocationById(route.params['id']).take(1).map((location: ILocation) => {
      if (location && location.id) {
        return location;
      } else if (route.params['clubId'] === 'new') {
        return this.locationService.setNewLocation();
      } else {
        this.router.navigate(['/locations']).then();
      }
    });
  }
}
