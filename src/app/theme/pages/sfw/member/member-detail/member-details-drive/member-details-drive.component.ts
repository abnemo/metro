import { Component, Input } from '@angular/core';
import { MemberStateService } from '../../../../../../shared/services/member/member-state.service';
import { IMember } from '../../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'member-details-drive',
  templateUrl: 'member-details-drive.component.html'
})

export class MemberDetailsDriveComponent {

  @Input() member: IMember;

  constructor(public memberStateService: MemberStateService) {

  }

}

