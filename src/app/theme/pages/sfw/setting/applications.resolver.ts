import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/take';
import { IApplication } from '../../../../shared/interfaces/application.interface';
import { ApplicationService } from '../../../../shared/services/application/application.service';

@Injectable()
export class ApplicationsResolver implements Resolve<IApplication> {

  constructor(private applicationService: ApplicationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApplication> {
    return this.applicationService.getCurrentApplication().take(1).map((application: IApplication) => {
      return application;
    });
  }

}
