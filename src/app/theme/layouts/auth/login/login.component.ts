import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'login.component.css'
  ]
})

export class LoginComponent implements OnInit {

  public loading: boolean = false;
  public nameMinLength: number = 3;
  public passwordMinLength: number = 5;
  public passwordMaxLength: number = 25;

  public showSignInForm: boolean = true;
  public showSignUpForm: boolean = false;
  public showPasswordForm: boolean = false;
  public showVerification: boolean = false;
  public showDemoLoginMessage: boolean = false;
  public signUpStatus;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams['verify-email']) {
      this.showVerification = true;
    }
  }

  toggleFormVisibility($event: any[]) {
    for (const key in $event) {
      this[key] = $event[key];
    }
  }

  toggleSignUpForm() {
    this.showPasswordForm = false;
    this.showSignInForm = false;
    this.showSignUpForm = true;
  }

  signUpComplete($event) {
    this.signUpStatus = $event;
  }

}
