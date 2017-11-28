import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-online-status',
  templateUrl: './user-online-status.component.html'
})
export class UserOnlineStatusComponent implements OnInit {

  @Input() onlineStatus: string;

  constructor() { }

  ngOnInit() {
  }

}
