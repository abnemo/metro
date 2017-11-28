import { Component, Input } from '@angular/core';
import { IMember } from '../../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'member-details-main',
  templateUrl: 'member-details-main.component.html'
})

export class MemberDetailsMainComponent {

  @Input() member: IMember;

  public getZodiac() {
    const dateOfBirth = new Date(this.member.mainData.birthday);
    const month = dateOfBirth.getMonth();
    const day = dateOfBirth.getDate();

    const zodiac = [
      'Capricorn',
      'Aquarius',
      'Pisces',
      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra',
      'Scorpio',
      'Sagittarius',
      'Capricorn'
    ];
    const lastDay = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > lastDay[month]) ? zodiac[month * 1 + 1] : zodiac[month];
  }

  public calculateAge() {
    const dateOfBirth = new Date(this.member.mainData.birthday);
    const ageDifMs = Date.now() - dateOfBirth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

