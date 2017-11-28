import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MemberService } from '../../../../../shared/services/member/member.service';
import * as moment from 'moment';
import 'moment/min/locales';
import { ISubscription } from 'rxjs/Subscription';
import { IMember } from '../../../../../shared/interfaces/member.interface';

moment.locale('de-de');

@Component({
  selector: 'upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html'
})
export class UpcomingBirthdaysComponent implements OnInit, OnDestroy {

  public members: IMember[];
  @Input() start: number = 0;
  @Input() limit: number;
  @Input() showCurrentBirthdaysOnly: boolean = false;

  public currentDay: any = moment().format('DD.MM');
  public moment: any;
  public showLoadingIndicator: boolean = true;

  private memberSubscription: ISubscription;

  constructor(private memberService: MemberService) {
    this.moment = moment;
  }

  ngOnInit() {
    this.memberSubscription = this.memberService.getMembers().map((members: IMember[]) =>
      members.sort(this.sortByDaysToNextBirthday)
        // filter to only get birthdays for current day
        .filter((member: IMember) => {
          if (!this.showCurrentBirthdaysOnly) {
            return member;
          }
          return moment(member.mainData.birthday).format('DD.MM') === this.currentDay;
        })
    ).subscribe((members: IMember[]) => {
      this.members = members;
      this.showLoadingIndicator = false;
    });
  }

  ngOnDestroy() {
    this.memberSubscription.unsubscribe();
  }

  sortByDaysToNextBirthday(a: IMember, b: IMember) {

    const thisYear: any = moment().format('YYYY');
    const now: any = moment();
    let birthdayMemberA: any = moment(a.mainData.birthday).set('year', thisYear);

    let daysToNextBirthdayMemberA: number;
    let daysToNextBirthdayMemberB: number;

    if (now.unix() <= birthdayMemberA.unix()) {
      daysToNextBirthdayMemberA = birthdayMemberA.diff(now, 'days');
    } else {
      birthdayMemberA = moment(a.mainData.birthday).set('year', thisYear).add(1, 'years');
      daysToNextBirthdayMemberA = birthdayMemberA.diff(now, 'days');
    }

    let birthdayMemberB: any = moment(b.mainData.birthday).set('year', thisYear);
    if (now.unix() <= birthdayMemberB.unix()) {
      daysToNextBirthdayMemberB = birthdayMemberB.diff(now, 'days');
    } else {
      birthdayMemberB = moment(b.mainData.birthday).set('year', thisYear).add(1, 'years');
      daysToNextBirthdayMemberB = birthdayMemberB.diff(now, 'days');
    }

    if (daysToNextBirthdayMemberA < daysToNextBirthdayMemberB) {
      return -1;
    }
    if (daysToNextBirthdayMemberA > daysToNextBirthdayMemberB) {
      return 1;
    }
    return 0;
  }

}
