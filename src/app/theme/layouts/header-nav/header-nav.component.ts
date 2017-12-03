import { AfterViewInit, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { IUser } from '../../../shared/interfaces/user.interface';
import { MemberService } from '../../../shared/services/member/member.service';

// declare let mLayout: any;

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html'
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.class') class = 'm-grid__item m-header';

  /*
data-minimize-mobile="hide" data-minimize-offset="200"
  data-minimize-mobile-offset="200"> */

  public currentUser: IUser;

  constructor(public authService: AuthService,
    public memberService: MemberService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user: IUser) => this.currentUser = user);
  }

  ngAfterViewInit() {
    // mLayout.initHeader();
  }

  public signOut() {
    this.authService.signOut();
  }
}
