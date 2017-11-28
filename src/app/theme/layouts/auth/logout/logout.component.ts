import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from '../../../../helpers';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class LogoutComponent implements OnInit {

  constructor(private _router: Router,
    private _authService: AuthService) {
  }

  ngOnInit(): void {
    Helpers.setLoading(true);
    this._authService.signOut();
    // this._router.navigate(['/login-model']).then();
  }
}
