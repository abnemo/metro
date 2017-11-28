import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeam } from '../../../../../shared/interfaces/team.interface';
import { IClub } from '../../../../../shared/interfaces/club.interface';
import { ISeason } from '../../../../../shared/interfaces/season.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '[team-item]',
  templateUrl: 'team-item.component.html',
})

export class TeamItemComponent {

  @Input() team: ITeam;
  @Input() clubs: IClub[];
  @Input() seasons: ISeason[];

  @Output() removeTeam = new EventEmitter(false);
  @Output() updateTeam = new EventEmitter(false);

  constructor() {
  }

}
