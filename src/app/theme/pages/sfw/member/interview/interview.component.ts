import {
  Component,
  Input
} from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { MemberService } from '../../../../../shared/services/member/member.service';

@Component({
  selector: 'interview',
  templateUrl: './interview.component.html'
})
export class InterviewComponent {

  @Input() member: IMember;
  @Input() members: IMember[];

  constructor(public memberService: MemberService) {
  }

}
