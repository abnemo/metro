import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/services/user/user.service';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../../../../shared/interfaces/user.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'user-avatar',
  templateUrl: 'user-avatar.component.html'
})

export class UserAvatarComponent implements OnInit {

  @Input() authorId: string;
  public user: Observable<IUser>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUserById(this.authorId);
  }

}

