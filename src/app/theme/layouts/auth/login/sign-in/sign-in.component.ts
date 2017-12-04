import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate/lib';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../../../shared/services/alert/alert.service';
import { AlertComponent } from '../../../../../shared/_directives/alert/alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit, OnChanges {

  @HostBinding('attr.class') class = 'm-login__signin';

  @Input() passwordMinLength;
  @Input() passwordMaxLength;
  @Input() loading: boolean;
  @Input() signUpStatus;
  @Input() showVerification: boolean;
  @Input() showDemoLoginMessage: boolean;

  @Output() toggleFormVisibility: EventEmitter<any> = new EventEmitter(false);
  @ViewChild('signInAlertContainer', { read: ViewContainerRef }) signInAlertContainer: ViewContainerRef;

  public form: FormGroup;
  public returnUrl: string = '';

  constructor(public sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private alertService: AlertService,
    private cfr: ComponentFactoryResolver,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    this.form = this.fb.group({
      email: ['',
        [
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(this.passwordMinLength),
          Validators.maxLength(this.passwordMaxLength)
        ]
      ]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.signUpStatus && changes.signUpStatus.currentValue) {
      // this.showVerification = true;
      this.showDemoLoginMessage = false;
      this.showAlert('signInAlertContainer');
      this.alertService.success(changes.signUpStatus.currentValue);
    }
  }

  signIn() {
    this.loading = true;
    const credentials = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.signIn(credentials)
      .then(() => this.router.navigate([this.returnUrl]).then())
      .catch((error: any) => {
        this.showDemoLoginMessage = false;
        this.showAlert('signInAlertContainer');
        this.alertService.error(error);
        this.loading = false;
      });
  }

  togglePasswordForm() {
    this.toggleFormVisibility.emit(
      {
        showSignInForm: false,
        showPasswordForm: true
      }
    );
  }

  resendVerificationMail() {
    this.authService.resendVerificationMail().then(
      () => {
        this.showVerification = false;
        this.showDemoLoginMessage = false;
        this.showAlert('signInAlertContainer');
        this.alertService.success('auth/send-verification');
      })
      .catch((error: any) => {
        this.showAlert('signInAlertContainer');
        this.alertService.error(error);
      });
  }

  showAlert(target) {
    this[target].clear();
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
