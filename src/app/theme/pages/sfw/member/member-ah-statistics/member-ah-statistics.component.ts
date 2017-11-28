import { Component, Input, OnInit } from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';

@Component({
  selector: 'member-ah-statistics',
  templateUrl: './member-ah-statistics.component.html'
})
export class MemberAhStatisticsComponent implements OnInit {

  @Input() members: IMember[];
  @Input() club: IClub;

  public ahMemberStates = [
    /*0,*/ 1, 2
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
