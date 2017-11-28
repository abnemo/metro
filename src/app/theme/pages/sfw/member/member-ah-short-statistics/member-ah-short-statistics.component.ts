import { Component, Input, OnInit } from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';

@Component({
  selector: 'member-ah-short-statistics',
  templateUrl: './member-ah-short-statistics.component.html'
})
export class MemberAhShortStatisticsComponent implements OnInit {

  @Input() members: IMember[];
  @Input() club: IClub;

  public memberStates = [
    /*0,*/ 1, 2
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
