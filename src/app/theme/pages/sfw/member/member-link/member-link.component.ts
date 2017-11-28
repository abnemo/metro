import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'member-link',
  template: `
    <button type="button" *ngIf="member" [routerLink]="['/members/detail/', member.id]"
            title="{{member.lastName}} {{member.firstName}}">{{member.lastName}} {{member.firstName}}
    </button>`
})

export class MemberLinkComponent implements OnInit, OnDestroy {

  @Input() memberId: string;
  public member: IMember;
  private memberSubscription: ISubscription;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.memberSubscription = this.memberService.getMemberById(this.memberId).subscribe(
      (member: IMember) => this.member = member
    );
  }

  ngOnDestroy() {
    this.memberSubscription.unsubscribe();
  }

}

