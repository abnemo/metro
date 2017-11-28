import { Component, Input, OnInit } from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';

@Component({
  selector: 'member-short-statistics',
  templateUrl: './member-short-statistics.component.html'
})
export class MemberShortStatisticsComponent implements OnInit {

  @Input() members: IMember[];
  @Input() club: IClub;

  public memberStates = [
    '?', 0, 1, 2, 3, 4, 5, 6
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
