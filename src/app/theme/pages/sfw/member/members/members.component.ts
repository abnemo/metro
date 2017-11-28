import { Component } from '@angular/core';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { MemberStateService } from '../../../../../shared/services/member/member-state.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'members.component.html'
})
export class MembersComponent {

  constructor(public memberService: MemberService,
    public memberStateService: MemberStateService,
    public clubService: ClubService) {
  }

}
