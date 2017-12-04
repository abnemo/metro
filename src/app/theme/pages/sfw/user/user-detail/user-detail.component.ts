import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../../../shared/interfaces/user.interface';

@Component({
  // selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'user-detail.component.html',
  // styleUrls: ['../user-profile/user-profile.component.css']
})

export class UserDetailComponent implements OnInit {

  public user: IUser;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: IUser }) => this.user = data.user);
  }

  removeUser(user: IUser) {
    // ToDo
  }

}
