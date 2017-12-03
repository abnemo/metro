import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';

@Component({
  selector: 'no-permissions',
  templateUrl: './no-permissions.component.html'
})
export class NoPermissionsComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}
