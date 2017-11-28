import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import 'rxjs/operator/map';
import 'rxjs/operator/take';
import { ApplicationService } from '../../../../../shared/services/application/application.service';
import { IStaticPage } from '../../../../../shared/interfaces/static-page.interface';
import { IApplication } from '../../../../../shared/interfaces/application.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StaticPageResolver implements Resolve<IStaticPage> {

  constructor(private applicationService: ApplicationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IStaticPage> {

    const pageId = route.params['staticPageId'];

    return this.applicationService.getCurrentApplication().take(1).map((application: IApplication) => {

      if (pageId) {
        for (let i = 0; i < application.staticPages.length; i++) {
          if (application.staticPages[i].id === pageId) {
            return application.staticPages[i];
          }
        }
      }

      const staticPage: IStaticPage = {
        sectionTitle: '',
        title: '',
        text: ' ',
        isEnabled: true,
        applicationId: application.id
      };
      return staticPage;

    });

  }

}
