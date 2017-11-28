import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { ClubService } from '../../../../../shared/services/club/club.service';
import { ISubscription } from 'rxjs/Subscription';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';

@Component({
  selector: 'member-statistics',
  templateUrl: './member-statistics.component.html'
})
export class MemberStatisticsComponent implements OnInit, OnDestroy {

  public memberStates = [
    '?', 0, 1, 2, 3, 4, 5, 6
  ];

  public members: IMember[];
  public clubs: IClub[];

  private clubSubscription: ISubscription;
  private memberSubscription: ISubscription;

  constructor(private memberService: MemberService, private clubService: ClubService) {
  }

  ngOnInit() {
    this.memberSubscription = this.memberService.getMembers().subscribe((members: IMember[]) => this.members = members);
    this.clubSubscription = this.clubService.getClubs().subscribe((clubs: IClub[]) => this.clubs = clubs);
  }

  ngOnDestroy() {
    this.clubSubscription.unsubscribe();
    this.memberSubscription.unsubscribe();
  }

}
