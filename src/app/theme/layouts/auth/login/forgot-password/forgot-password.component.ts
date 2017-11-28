import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn, zoomOut } from 'ng-animate/lib';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { AlertService } from '../../../../../shared/services/alert/alert.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  animations: [
    trigger('forgotPasswordAnimation', [
      state('1', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('0', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', useAnimation(zoomOut)),
      transition('0 => 1', useAnimation(zoomIn)),
    ])
  ]
})
export class ForgotPasswordComponent implements OnInit {

  @Input() showPasswordForm: boolean;
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
