import { Injectable, ViewChild } from '@angular/core';
import { FacebookService, FBVideoComponent, LoginOptions, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';

@Injectable()
export class SocialService {

  @ViewChild(FBVideoComponent) video: FBVideoComponent;

  constructor(private fb: FacebookService) {
  }

  init() {
    return this.fb.init({
      appId: '431939683855219',
      version: 'v2.9'
    });
  }

  getAuthResponse() {
    return this.fb.getAuthResponse();
  }

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        // console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    return this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        // console.log('Logged in', res);
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    return this.fb.getLoginStatus();
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        // console.log('Got the users profile', res);
      })
      .catch(this.handleError);
  }


  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        // console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }


  /**
   * Show the share dialog
   */
  share() {

    const options: UIParams = {
      method: 'share',
      href: 'https://github.com/zyramedia/ng2-facebook-sdk'
    };

    this.fb.ui(options)
      .then((res: UIResponse) => {
        // console.log('Got the users profile', res);
      })
      .catch(this.handleError);

  }


  playVideo() {
    this.video.play();
  }

  onVideoEvent(ev) {
    // console.log('Video timeline-event fired: ' + ev);
  }

  pauseVideo() {
    this.video.pause();
  }

  /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   */
  private handleError(error) {
    // console.log('tes');
    console.error('Error processing action', error);
  }

}
