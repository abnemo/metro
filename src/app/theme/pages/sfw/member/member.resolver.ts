import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MemberService } from '../../../../shared/services/member/member.service';
import 'rxjs/operator/map';
import 'rxjs/operator/take';
import { IMember } from '../../../../shared/interfaces/member.interface';

@Injectable()
export class MemberResolver implements Resolve<IMember> {

  constructor(private memberService: MemberService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMember> {

    return this.memberService.getMemberById(route.params['id'])
      .take(1)
      .map((member: IMember) => {
        if (route.params['id'] === 'new') {
          return this.memberService.setNewMember();
        } else if (member && member.id !== 'new') {
          return member;
        } else {
          this.router.navigate(['/members']).then();
        }
      });

  }
}
