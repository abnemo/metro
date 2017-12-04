import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { ApplicationService } from '../../../../../shared/services/application/application.service';
import { UserService } from '../../../../../shared/services/user/user.service';
import { MemberService } from '../../../../../shared/services/member/member.service';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  templateUrl: './statistics.component.html'
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  public angularVersion: string;
  public env: any;

  public weatherSettings: WeatherSettings = {
    location: {
      cityName: 'Sankt Wendel'
    },
    backgroundColor: '#347c57',
    color: '#ffffff',
    width: '300px',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: false,
    showForecast: false,
    layout: WeatherLayout.WIDE,
    language: this.translateService.currentLang
  };

  constructor(public applicationService: ApplicationService,
    public translateService: TranslateService,
    public userService: UserService,
    public memberService: MemberService) {
    this.angularVersion = VERSION.full;
    this.env = environment;
  }

  ngOnInit() {

  }

  // @ViewChild(FBVideoComponent) video: FBVideoComponent;

  /* constructor( private fb: FacebookService,
              public articleService: ArticleService,
              public authService: AuthService) {

     const initParams: InitParams = {
      appId: facebookConfig.appId,
      xfbml: facebookConfig.xfbml,
      version: facebookConfig.version
    };

    fb.init(initParams).then((res) => console.log(res));
  }*/

  ngAfterViewInit() {
    /* this._script.load('dashboard',
      'assets/app/js/dashboard.js'); */
  }


  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   *
   login-model() {
this.fb.login-model()
.then((res: LoginResponse) => {
  // console.log('Logged in', res);
})
.catch(this.handleError);
}

   /**
   * Login with additional permissions/options
   *
   loginWithOptions() {

const loginOptions: LoginOptions = {
enable_profile_selector: true,
return_scopes: true,
scope: 'public_profile,user_friends,email,pages_show_list'
};

this.fb.login-model(loginOptions)
.then((res: LoginResponse) => {
  console.log('Logged in', res);
})
.catch(this.handleError);

}

   getLoginStatus() {
this.fb.getLoginStatus()
.then(console.log.bind(console))
.catch(console.error.bind(console));
}


   /**
   * Get the user's profile
   *
   getProfile() {
this.fb.api('/me')
.then((res: any) => {
  console.log('Got the users profile', res);
})
.catch(this.handleError);
}


   /**
   * Get the users friends
   *
   getFriends() {
this.fb.api('/me/friends')
.then((res: any) => {
  console.log('Got the users friends', res);
})
.catch(this.handleError);
}


   /**
   * Show the share dialog
   *
   share() {

const id = 'page or user id goes here';
const accessToken = 'for page if posting to a page, for user if posting to a user\'s feed';

const postImageOptions = {
method: 'POST',
uri: `https://graph.facebook.com/v2.9/${id}/feed`,
qs: {
  access_token: accessToken,
  caption: 'Caption goes here',
  url: 'Image url goes here'
}
};
this.fb
.ui(postImageOptions).then((res: UIResponse) => {
console.log('Got the users profile', res);
})
.catch(this.handleError);

/*
const options: UIParams = {
method: 'share',
href: 'https://github.com/zyramedia/ng2-facebook-sdk'
};

this.fb.ui(options)
.then((res: UIResponse) => {
// console.log('Got the users profile', res);
})
.catch(this.handleError);
*
}


   playVideo() {
this.video.play();
}

   onVideoEvent(ev) {
console.log('Video timeline-event fired: ' + ev);
}

   pauseVideo() {
this.video.pause();
}

   /**
   * This is a convenience method for the sake of this example project.
   * Do not use this in production, it's better to handle errors separately.
   * @param error
   *
   private handleError(error) {
console.error('Error processing action', error);
} */

}
