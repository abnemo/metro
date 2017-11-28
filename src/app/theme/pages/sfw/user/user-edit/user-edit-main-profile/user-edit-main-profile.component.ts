import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../../../shared/interfaces/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import 'moment/min/locales';
import { MemberService } from '../../../../../../shared/services/member/member.service';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { NgxRole, NgxRolesObject, NgxRolesService } from 'ngx-permissions';

moment.locale('de-de');

@Component({
  selector: 'user-edit-main-profile',
  templateUrl: './user-edit-main-profile.component.html'
})
export class UserEditMainProfileComponent implements OnInit {

  public form: FormGroup;
  public user: IUser;
  public moment: any;
  public roles: string[] = [];

  constructor(public memberService: MemberService,
    public userService: UserService,
    public roleService: NgxRolesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.moment = moment;
  }

  ngOnInit() {
    this.route.data.subscribe((data: { user: IUser }) => this.user = data.user);

    this.form = this.fb.group({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      assignedRole: this.user.assignedRole,
      assignedMember: this.user.assignedMember,
      social: this.initSocial()
    });

    this.form.get('firstName').disable();
    this.form.get('lastName').disable();
    this.form.get('email').disable();

    this.initRoles();
  }

  initRoles() {
    const _that = this;
    this.roleService.roles$.subscribe((roles: NgxRolesObject) => {
      Object.keys(roles).map(function(objectKey) {
        const value = roles[objectKey];
        _that.roles.push(value.name);
      });
    });
  }

  initSocial() {
    return this.fb.group({
      facebook: this.user.social ? this.user.social.facebook : '',
      twitter: this.user.social ? this.user.social.twitter : '',
      instagram: this.user.social ? this.user.social.instagram : '',
    });
  }

  saveUser() {
    let action;
    if (this.user.id) {
      action = this.userService.updateUser(this.user.id, this.form.getRawValue());
    } else {
      // action = this.userService.createUser(this.form.getRawValue());
    }
    action.then(() => this.redirectToList());
  }

  redirectToList() {
    this.router.navigate(['/users']).then();
  }

  cancel() {
    this.redirectToList();
  }

}
