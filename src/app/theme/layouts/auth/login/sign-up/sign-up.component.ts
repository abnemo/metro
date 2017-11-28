import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate/lib';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { AlertService } from '../../../../../shared/services/alert/alert.service';
import { IUser } from '../../../../../shared/interfaces/user.interface';
import { AlertComponent } from '../../../../../shared/_directives/alert/alert.component';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  animations: [
    trigger('signUpAnimation', [
      state('1', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('0', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', useAnimation(zoomOut)),
      transition('0 => 1', useAnimation(zoomIn)),
    ])
  ]
})
export class SignUpComponent implements OnInit {

  @Input() showSignUpForm: boolean;
  @Input() loading: boolean;
  @Input() nameMinLength: number;
  @Input() passwordMinLength: number;
  @Input() passwordMaxLength: number;

  @Output() toggleFormVisibility: EventEmitter<any> = new EventEmitter(false);
  @Output() signUpComplete: EventEmitter<any> = new EventEmitter(false);

  @ViewChild('signUpAlertContainer', { read: ViewContainerRef }) signUpAlertContainer: ViewContainerRef;

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private cfr: ComponentFactoryResolver,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(this.nameMinLength)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required,
        Validators.minLength(this.passwordMinLength),
        Validators.maxLength(this.passwordMaxLength)]],
        confirmPassword: ['', [
          Validators.required,
          Validators.minLength(this.passwordMinLength),
          Validators.maxLength(this.passwordMaxLength)]],
      }, { validator: this.passwordConfirming }),
      agree: [false, [Validators.required, this.validateAgreement]],
    });
  }

  toggleSignUpForm() {
    this.toggleFormVisibility.emit(
      {
        showSignInForm: true,
        showSignUpForm: false
      }
    );
  }

  private validateAgreement(c: AbstractControl): { invalid: boolean } {
    if (!c.value) {
      return { invalid: true };
    }
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  signUp() {
    this.loading = true;
    const user: IUser = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.passwords.password
    };
    this.authService.register(user)
      .then(() => {
        this.signUpComplete.emit({
          code: 'auth/successful-signup'
        });
        this.form.reset();
        this.toggleSignUpForm();
        this.loading = false;
      }).catch(
      (error: any) => {
        this.showAlert('signUpAlertContainer');
        this.alertService.error(error);
        this.loading = false;
      });
  }

  showAlert(target) {
    this[target].clear();
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

}
