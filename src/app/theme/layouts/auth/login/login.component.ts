import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  zoomIn,
  zoomOut
} from 'ng-animate/lib';
import {
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';
import { ApplicationService } from '../../../../shared/services/application/application.service';
import { IApplication } from '../../../../shared/interfaces/application.interface';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../../../assets/vendors/base/vendors.bundle.css',
    '../../../../../assets/demo/default/base/style.bundle.css',
    'login.component.css'
  ],
  animations: [
    trigger('authAnimation', [
      state('1', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('0', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', useAnimation(zoomOut)),
      transition('0 => 1', useAnimation(zoomIn)),
    ])
  ]
})

export class LoginComponent implements OnInit {

  @HostBinding('attr.class') class = 'm-grid m-grid--hor m-grid--root m-page';

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
  public isRegistrationAllowed: boolean = true;

  constructor(private route: ActivatedRoute,
              private title: Title,
              private translate: TranslateService,
              private applicationService: ApplicationService) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    const browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage.match(/en|fr/) ? browserLanguage : 'de');

    applicationService.getCurrentApplication().subscribe((application: IApplication) => {
      title.setTitle(application.page.title);
    });
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
