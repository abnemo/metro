import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './no-permissions.component.html'
})
export class NoPermissionsComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}
