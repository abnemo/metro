import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../shared/services/script-loader/script-loader.service';
import { ISubscription } from 'rxjs/Subscription';

declare let mApp: any;

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './theme.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit, OnDestroy {

  private eventSubscription: ISubscription;

  constructor(private _script: ScriptLoaderService, private _router: Router) {

  }

  ngOnInit() {
    this._script.load('body',
      'assets/vendors/base/vendors.bundle.js',
      'assets/demo/default/base/scripts.bundle.js')
      .then(() => {
        Helpers.setLoading(false);
      });

    this.eventSubscription = this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        (<any>mApp).scrollTop();
        Helpers.setLoading(true);
      }
      if (route instanceof NavigationEnd) {
        Helpers.setLoading(false);
        const animation = 'm-animate-fade-in-up';
        $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('.m-wrapper').removeClass(animation);
        }).removeClass(animation).addClass(animation);
      }
    });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

}
