import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router
} from '@angular/router';
import { Helpers } from './helpers';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NgxRolesService } from 'ngx-permissions';
import { rolesConfig } from './config/roles.config';
import { ApplicationService } from './shared/services/application/application.service';
import { IApplication } from './shared/interfaces/application.interface';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 ' +
  'm-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark ' +
  'm-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';

  constructor(private rolesService: NgxRolesService,
    private translate: TranslateService,
    private _router: Router,
    private applicationService: ApplicationService,
    private title: Title) {

    this.applicationService.getCurrentApplication().subscribe((application: IApplication) => {
      title.setTitle(application.page.title);
    });

    // Permissions
    for (const key in rolesConfig) {
      for (const roleName in rolesConfig[key]) {
        this.rolesService.addRole(roleName, rolesConfig[key][roleName]);
      }
    }

    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    const browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'de');
  }

  ngOnInit() {
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        Helpers.setLoading(true);
        Helpers.bodyClass(this.globalBodyClass);
      }
      if (route instanceof NavigationEnd) {
        Helpers.setLoading(false);
      }
    });
  }

}
