import { Component, ElementRef, HostBinding, NgZone, Renderer2, ViewChild } from '@angular/core';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  globalBodyClass = 'm-page--fluid m--skin- m-content--skin-light2 m-header--fixed ' +
    'm-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas ' +
    'm-footer--push m-aside--offcanvas-default';

  @HostBinding('attr.class') class = this.globalBodyClass;

  @ViewChild('spinnerElement') spinnerElement: ElementRef;

  constructor(private router: Router, private ngZone: NgZone, private renderer: Renderer2) {
    router.events.subscribe((event: RouterEvent) => this._navigationInterceptor(event));
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._showSpinner();
    }
    if (event instanceof NavigationEnd ||  event instanceof NavigationCancel || event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setStyle(this.spinnerElement.nativeElement, 'opacity', '0');
    });
  }

  private _showSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setStyle(this.spinnerElement.nativeElement, 'opacity', '1');
    });
  }

  /*
  constructor(/* private rolesService: NgxRolesService,

    private _router: Router,
    private applicationService: ApplicationService, ) {

    this.applicationService.getCurrentApplication().subscribe((application: IApplication) => {
      title.setTitle(application.page.title);
    });

    /* Permissions
    for (const key in rolesConfig) {
      for (const roleName in rolesConfig[key]) {
        this.rolesService.addRole(roleName, rolesConfig[key][roleName]);
      }
    }
  } */

}
