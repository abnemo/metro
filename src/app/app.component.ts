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
  styles: [`.spinner {
    margin: 30px auto;
    width: 114px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }

  .outer {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .middle {
    display: table-cell;
    vertical-align: middle;
  }

  .inner {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 350px;
  }
  
  `]
})
export class AppComponent {

  @HostBinding('attr.class') class = 'm-page--fluid m--skin- m-content--skin-light2 m-header--fixed ' +
    'm-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas ' +
    'm-footer--push m-aside--offcanvas-default';

  @ViewChild('spinnerElement') spinnerElement: ElementRef;

  constructor(private router: Router, private ngZone: NgZone, private renderer: Renderer2) {
    router.events.subscribe((event: RouterEvent) => this._navigationInterceptor(event));
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._showSpinner();
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
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

}
