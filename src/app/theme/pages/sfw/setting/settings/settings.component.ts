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
import { IStaticPage } from '../../../../../shared/interfaces/static-page.interface';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public application: IApplication;
  public form: FormGroup;
  public isSubmitting: boolean = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { application: IApplication }) => this.application = data.application);

    this.form = this.fb.group({
      page: this.initPage(),
      urlShortening: this.initUrlShortening(),
      registration: this.initRegistration(),
      downtime: this.initDowntime(),
      // staticPages: this.fb.array([])
    });

    /* for (let i = 0; i < this.application.staticPages.length; i++) {
      this.addStaticPage(this.application.staticPages[i]);
    }
    console.log(this.form.controls['staticPages']['controls'][0]);

    /* this.form.valueChanges.subscribe((changes: IApplication) => {
      console.log(changes);
    });*/
    // https://plnkr.co/edit/hQ6RtzCfPosfQl4HlbZQ?p=info
    // https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
    // console.log(this.form.controls['page']);

    /* for (let i = 0; i < this.form.controls['staticPages']['controls'].length; i++) {
      console.log(this.form.controls['staticPages']['controls'][i]['controls']);

      for (const key in this.form.controls['staticPages']['controls'][i]['controls']) {
        console.log(this.form.controls['staticPages']['controls'][i]['controls'][key]);
      }
    } */
  }

  /* initStaticPage(staticPage: IStaticPage) {
    return this.fb.group({
      sectionTitle: [staticPage.sectionTitle, [Validators.required]],
      title: [staticPage.title, [Validators.required]],
      text: staticPage.text,
      isEnabled: staticPage.isEnabled
    });
  }

  addStaticPage(staticPage: IStaticPage) {
    const control = <FormArray>this.form.controls['staticPages'];
    const addControl = this.initStaticPage(staticPage);
    control.push(addControl);
  }

  removeStaticPage(i: number) {
    const control = <FormArray>this.form.controls['staticPages'];
    control.removeAt(i);
  } */

  initPage() {
    return this.fb.group({
      title: [this.application.page.title, [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
      description: this.application.page.description,
      email: this.application.page.email
    });
  }

  initUrlShortening() {
    return this.fb.group({
      isEnabled: this.application.urlShortening.isEnabled,
      provider: this.application.urlShortening.provider
    });
  }

  initRegistration() {
    return this.fb.group({
      isEnabled: this.application.registration.isEnabled,
      defaultRole: this.application.registration.defaultRole
    });
  }

  initDowntime() {
    return this.fb.group({
      isEnabled: this.application.downtime.isEnabled,
      message: this.application.downtime.message
    });
  }


  saveSettings() {
    // let action;
    this.isSubmitting = true;
    console.log(this.application);
    /*
    this.applicationService.updateApplication(this.application.id, this.application).then(
      () => console.log('Success'),
      (error: any) => console.log(error)
    );*/
  }

}
