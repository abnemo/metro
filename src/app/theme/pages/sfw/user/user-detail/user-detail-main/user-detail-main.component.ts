import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../../../../shared/interfaces/user.interface';

@Component({
  selector: 'user-detail-main',
  templateUrl: './user-detail-main.component.html'
})
export class UserDetailMainComponent implements OnInit {

  @Input() user: IUser;

  constructor() {
  }

  ngOnInit() {
  }

}
