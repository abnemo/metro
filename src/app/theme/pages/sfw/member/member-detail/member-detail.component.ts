import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { IProfile } from '../../../../../shared/interfaces/profile.interface';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'member-detail.component.html'
})

export class MemberDetailComponent implements OnInit {

  public member: IMember;
  public profile: Observable<IProfile>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { member: IMember }) => this.member = data.member);
  }

  removeMember() {
    console.log(this.member);
  }

}

