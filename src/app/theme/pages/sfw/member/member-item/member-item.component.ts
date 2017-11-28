import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberService } from '../../../../../shared/services/member/member.service';
import * as moment from 'moment';
import 'moment/min/locales';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';
import { MemberStateService } from '../../../../../shared/services/member/member-state.service';
import { IMemberState } from '../../../../../shared/interfaces/member-state.interface';

moment.locale('de-de');

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '[member-item]',
  templateUrl: 'member-item.component.html',
})

export class MemberItemComponent {

  @Input() member: IMember;
  @Input() clubMemberStates: IMemberState;
  @Input() ahMemberStates: IMemberState;
  @Input() clubs: IClub[];

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  public moment: any;

  constructor(public memberService: MemberService, public memberStateService: MemberStateService) {
    this.moment = moment;
  }
}
