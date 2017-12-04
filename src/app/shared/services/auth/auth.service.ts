import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../user/user.service';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { IUser } from '../../interfaces/user.interface';
import { ICreation } from '../../interfaces/creation.interface';
import * as moment from 'moment';
import { AngularFirestore } from 'angularfire2/firestore';
import AuthProvider = firebase.auth.AuthProvider;

// Presence System
// https://www.youtube.com/watch?v=2ZDeT5hLIBQ&feature=push-u&attr_tag=EDwjeHaWKNSWOoZT-6
// Role Management
// https://www.youtube.com/watch?v=3qODuvp1Zp8&feature=push-u&attr_tag=Kh7QBh7gxiT8VfyW-6

@Injectable()
export class AuthService implements OnDestroy {

  public authUser: firebase.User = null;
  public authState: Observable<IUser>;

  private mouseEvents: ISubscription;
  private timer: ISubscription;
  private authSubscription: ISubscription;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private userService: UserService) {
    this.authState = this.afAuth.authState.switchMap(user => {
      if (user) {
        this.authUser = user;
        this.updateOnConnect();
        this.updateOnDisconnect();
        this.updateOnIdle();
        return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.mouseEvents.unsubscribe();
    this.timer.unsubscribe();
  }

  get id(): string {
    return this.authState ? this.afAuth.auth.currentUser.uid : '';
  }

  signIn(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(
      (authUser: firebase.User) => {
        if (authUser.emailVerified) {
          this.userService.updateUserData(authUser.uid, {
            emailVerified: authUser.emailVerified,
            email: authUser.email
          });
        }
      }
    );
  }

  private oAuthLogin(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => this.userService.updateUserData(credential.user.uid, credential.user));
  }

  signInWithGoogle(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInWithTwitter(): Promise<any> {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  signInWithFacebook(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  register(values: IUser): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((authUser) => {
        authUser.sendEmailVerification().then();
        delete values.password;
        values.providerId = authUser.providerId;
        values.id = authUser.uid;
        values.emailVerified = authUser.emailVerified;
        values.creation = this.getCreation();
        return this.userService.createUser(values);
      });
  }

  resendVerificationMail(): Promise<any> {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  sendPasswordResetEmail(email: string): Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  signOut(): Promise<any> {
    return this.updateStatus('offline').then(
      () => {
        this.mouseEvents.unsubscribe();
        this.timer.unsubscribe();
        return this.afAuth.auth.signOut();
      }
    );
  }

  private updateStatus(status: string) {
    if (!this.id) {
      return;
    }
    return this.userService.updateUserData(this.id, {
      onlineStatus: status
    });
  }

  private updateOnConnect() {
    /* return this.afs.object('.info/connected').subscribe(connected => {
      const status = connected.$value ? 'online' : 'offline';
      this.updateStatus(status);
    }); */
  }

  private updateOnIdle() {
    this.mouseEvents = Observable
      .fromEvent(document, 'mousemove')
      .throttleTime(30000)
      .subscribe(() => {
        this.updateStatus('online');
        this.resetTimer();
      });
  }

  private resetTimer() {
    if (this.timer) {
      this.timer.unsubscribe();
    }

    this.timer = Observable.timer(40000).subscribe(() => {
      this.updateStatus('away');
      // this.router.navigate(['/locked']).then();
    });
  }

  private updateOnDisconnect() {
    return firebase.database().ref().child('users/' + this.id).onDisconnect().update({
      onlineStatus: 'offline'
    });
  }

  public getCreation(): ICreation {
    const creation: ICreation = {
      at: moment().toISOString(),
      from: this.id
    };
    return creation;
  }

}
