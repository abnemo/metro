import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../../../assets/vendors/base/vendors.bundle.css',
    '../../../../../assets/demo/default/base/style.bundle.css',
    'login.component.css'
  ]
})

export class LoginComponent implements OnInit {

  pageClass = 'm-grid m-grid--hor m-grid--root m-page';
  @HostBinding('attr.class') class = this.pageClass;

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

  private isRegistrationAllowed: boolean = false;

  constructor(private route: ActivatedRoute, private translate: TranslateService) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    const browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'de');
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
