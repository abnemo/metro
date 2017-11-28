import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from 'angularfire2/auth';

const fbAuthMethods = [
  'subscribe'
];

describe('AuthService', () => {
  beforeEach(() => {

    let authService;
    let authSubject;
    let mockFirebaseAuth;

    mockFirebaseAuth = jasmine.createSpy('fbAuth', this.fbAuthMethods);
    mockFirebaseAuth.subscribe().and.callFake(callback => {
      authSubject.subscribe(callback);
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: mockFirebaseAuth },
        AuthService
      ],
      imports: [RouterTestingModule]
    });

    inject([AuthService], (service: AuthService) => {
      authService = service;
    })();
  });

  it('should exist', inject([AuthService], (service: AuthService) => {
    expect(service).toBeDefined();
  }));

  it('should subscribe to auth state changes', () => {
    expect(this.authService.authState).toBe(null);

    const authData = {
      uid: '12345',
      provider: 'password',
      auth: {
        displayName: 'John Doe',
        providerId: 'github.com'
      }
    };

    this.authSubject.next(authData);
    expect(this.authService.authState).toBe(authData);
  });
});
