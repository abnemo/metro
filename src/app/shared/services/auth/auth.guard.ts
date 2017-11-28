import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { UserService } from '../user/user.service';
import { ISubscription } from 'rxjs/Subscription';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

  private userSubscription: ISubscription;

  constructor(private router: Router,
    private authService: AuthService,
    private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.authState
      .take(1)
      .map(authState => !!authState)
      .do(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['login']).then();
        } else {
          // Redirect, if user hasn´t verified his email
          if (!this.authService.authUser.emailVerified && this.authService.authUser.providerId === 'firebase') {
            this.router.navigate(['login'], { queryParams: { 'verify-email': true } }).then();
          }
        }
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
