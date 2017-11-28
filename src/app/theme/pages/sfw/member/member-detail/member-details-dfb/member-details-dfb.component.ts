import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { ClubService } from '../../../../../../shared/services/club/club.service';
import { IMember } from '../../../../../../shared/interfaces/member.interface';
import { IClub } from '../../../../../../shared/interfaces/club.interface';

@Component({
  selector: 'member-details-dfb',
  templateUrl: 'member-details-dfb.component.html'
})

export class MemberDetailsDFBComponent implements OnInit {

  @Input() member: IMember;
  clubs: IClub[];

  constructor(private clubService: ClubService) {

  }

  ngOnInit() {
    this.clubService.getClubs().subscribe((clubs: IClub[]) => this.clubs = clubs);
  }

}
