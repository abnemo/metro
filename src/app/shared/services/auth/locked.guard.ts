import {
  Injectable,
  OnDestroy
} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { UserService } from '../user/user.service';
import { IUser } from '../../interfaces/user.interface';
import { ISubscription } from 'rxjs/Subscription';

@Injectable()
export class LockedGuard implements CanActivate, OnDestroy {

  private userSubscription: ISubscription;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          // Redirect if not logged in
          this.router.navigate(['login']).then();
        } else {
          // Redirect if user is online
          this.userSubscription = this.userService.getUserById(this.authService.id).subscribe((user: IUser) => {
            if (user.onlineStatus === 'online') {
              this.router.navigate(['dashboard']).then();
            }
          });
        }
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
