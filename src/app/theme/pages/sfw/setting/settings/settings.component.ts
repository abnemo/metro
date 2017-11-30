import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApplication } from '../../../../../shared/interfaces/application.interface';
import { ApplicationService } from '../../../../../shared/services/application/application.service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ISocial } from '../../../../../shared/interfaces/social.interface';
import { IStaticPage } from '../../../../../shared/interfaces/static-page.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public application: IApplication;
  public form: FormGroup;
  public isSubmitting: boolean = false;
  public currentStaticPage: number = -1;
  public newPageTitle: string = 'Title';
  public showFooterOptions: boolean = true;
  private notEditedPage: IStaticPage = {
    sectionTitle: '',
    title: '',
    text: '',
    isEnabled: false
  };

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private title: Title,
              private translateService: TranslateService,
              private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { application: IApplication }) => this.application = data.application);

    this.form = this.fb.group({
      page: this.initPage(),
      urlShortening: this.initUrlShortening(),
      registration: this.initRegistration(),
      downtime: this.initDowntime(),
      staticPages: this.initStaticPages(),
      social: this.initSocialProviders()
    });

    if (!this.application.downtime.isEnabled) {
      this.form.get('downtime.message').disable();
    }

    this.form.valueChanges.subscribe((changes: IApplication): void => {
      this.application.page = changes.page;
      this.application.urlShortening = changes.urlShortening;
      this.application.registration = changes.registration;
      this.application.downtime = changes.downtime;
      this.application.social = changes.social;
      this.application.staticPages = changes.staticPages;
    });

    this.translateService.get('general.applications.static.newPageTitle').subscribe((res: string) => {
      this.newPageTitle = res;
    });
  }

  initPage(): FormGroup {
    return this.fb.group({
      title: [this.application.page.title, [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
      description: this.application.page.description,
      email: this.application.page.email
    });
  }

  initUrlShortening(): FormGroup {
    return this.fb.group({
      isEnabled: this.application.urlShortening.isEnabled,
      provider: this.application.urlShortening.provider
    });
  }

  initRegistration(): FormGroup {
    return this.fb.group({
      isAllowed: this.application.registration.isAllowed,
      defaultRole: this.application.registration.defaultRole
    });
  }

  initDowntime(): FormGroup {
    return this.fb.group({
      isEnabled: this.application.downtime.isEnabled,
      message: this.application.downtime.message
    });
  }

  /**
   * Static Pages
   */
  initStaticPage(staticPage?: IStaticPage): FormGroup {
    return this.fb.group({
      isEnabled: [staticPage ? staticPage.isEnabled : false],
      sectionTitle: [staticPage ? staticPage.sectionTitle : '', [Validators.required]],
      text: [staticPage ? staticPage.text : '', [Validators.required]],
      title: [staticPage ? staticPage.title : this.newPageTitle, [Validators.required]]
    });
  }

  initStaticPages(): FormArray {
    if (this.application.staticPages.length === 0) {
      return this.fb.array([]);
    }
    const pages = [];
    for (let i = 0; i < this.application.staticPages.length; i++) {
      const fbGroup = this.initStaticPage(this.application.staticPages[i]);
      pages.push(fbGroup);
    }
    return this.fb.array(pages);
  }

  addStaticPage(): void {
    const control = this.form.get('staticPages') as FormArray;
    control.push(this.initStaticPage());
    this.currentStaticPage = this.form.controls['staticPages']['controls'].length - 1;
    this.showFooterOptions = false;
  }

  removeStaticPage(i: number): void {
    const control = this.form.get('staticPages') as FormArray;
    control.removeAt(i);
  }

  setCurrentStaticPage(i: number): void {
    for (const key in this.form.controls['staticPages']['controls'][i].controls) {
      this.notEditedPage[key] = this.form.controls['staticPages']['controls'][i].controls[key].value;
    }
    console.log(this.notEditedPage);
    this.currentStaticPage = i;
    this.showFooterOptions = false;
  }

  saveStaticPage(): void {
    this.currentStaticPage = -1;
  }

  cancel(i: number): void {
    this.form.controls['staticPages']['controls'][i].controls = this.notEditedPage;
    this.currentStaticPage = -1;
    this.showFooterOptions = true;
  }

  /**
   * Social-Links
   */
  initSocialProvider(social?: ISocial): FormGroup {
    return this.fb.group({
      link: [social ? social.link : '', [Validators.required]],
      title: [social ? social.title : '', [Validators.required]]
    });
  }

  initSocialProviders(): FormArray {
    if (!this.application.social || this.application.social.length === 0) {
      return this.fb.array([this.initSocialProvider(null)]);
    }
    const groups = [];
    for (let i = 0; i < this.application.social.length; i++) {
      const fbGroup = this.initSocialProvider(this.application.social[i]);
      groups.push(fbGroup);
    }
    return this.fb.array(groups);
  }

  addSocialProvider(): void {
    const control = this.form.get('social') as FormArray;
    control.push(this.initSocialProvider());
  }

  removeSocialProvider(i: number): void {
    const control = this.form.get('social') as FormArray;
    control.removeAt(i);
  }

  saveSettings(): void {
    // set Page Title
    if (this.title.getTitle() !== this.application.page.title) {
      this.title.setTitle(this.application.page.title);
    }
    // let action;
    this.isSubmitting = true;
    this.applicationService.updateApplication(this.application).then(() => {
      this.isSubmitting = false;
      // ToDo: Create notification
    }, (error: any) => console.log(error));
  }

}
