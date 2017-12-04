import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { AlertService } from '../../../../../shared/services/alert/alert.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  @HostBinding('attr.class') class = 'm-login__forget-password';

  @Input() loading: boolean;

  @Output() toggleFormVisibility: EventEmitter<any> = new EventEmitter(false);

  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.email]]
    });
  }

  forgotPassword() {
    this.loading = true;
    this.authService.sendPasswordResetEmail(this.form.value.email)
      .then(() => {
        this.alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
        this.loading = false;
        this.togglePasswordForm();
        this.form.reset();
      }).catch(
      (error: any) => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  togglePasswordForm() {
    this.toggleFormVisibility.emit(
      {
        showSignInForm: true,
        showPasswordForm: false
      }
    );
  }

}
