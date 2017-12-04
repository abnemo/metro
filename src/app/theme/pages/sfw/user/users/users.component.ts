import { Component } from '@angular/core';
import { UserService } from '../../../../../shared/services/user/user.service';
import { AuthService } from '../../../../../shared/services/auth/auth.service';

@Component({
  templateUrl: './users.component.html'
})

export class UsersComponent {

  constructor(public authService: AuthService,
    public userService: UserService) {
  }

}
