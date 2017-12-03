import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

// declare let mApp: any;

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../assets/vendors/base/vendors.bundle.css',
    '../../assets/demo/default/base/style.bundle.css',
  ]
})
export class ThemeComponent implements OnInit {

  @HostBinding('attr.class') class = 'm-grid m-grid--hor m-grid--root m-page';

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private translate: TranslateService, private location: Location, private router: Router) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    const browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'de');
  }

  ngOnInit() {

    this.location.subscribe((ev: PopStateEvent) => this.lastPoppedUrl = ev.url);

    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url != this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else {
        if (ev instanceof NavigationEnd) {
          if (ev.url == this.lastPoppedUrl) {
            this.lastPoppedUrl = undefined;
            window.scrollTo(0, this.yScrollStack.pop());
          } else {
            window.scrollTo(0, 0);
          }
        }
      }
    });

    /* this._script.load('body',
      'assets/vendors/base/vendors.bundle.js',
      'assets/demo/default/base/scripts.bundle.js');

      if (route instanceof NavigationEnd) {
        const animation = 'm-animate-fade-in-up';
        $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('.m-wrapper').removeClass(animation);
        }).removeClass(animation).addClass(animation);
      }
    }); */
  }

}
