import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStaticPage } from '../../../../../../shared/interfaces/static-page.interface';
import { ApplicationService } from '../../../../../../shared/services/application/application.service';
import { IApplication } from '../../../../../../shared/interfaces/application.interface';

@Component({
  selector: 'static-page',
  templateUrl: './static-page.component.html'
})
export class StaticPageComponent implements OnInit {

  public form: FormGroup;
  public staticPage: IStaticPage;
  public application: IApplication;

  constructor(private fb: FormBuilder,
    private applicationService: ApplicationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { application: IApplication, staticPage: IStaticPage }) => {
      this.application = data.application;
      this.staticPage = data.staticPage;
    });

    this.form = this.fb.group({
      isEnabled: [this.staticPage.isEnabled, [Validators.required]],
      sectionTitle: [this.staticPage.sectionTitle, [Validators.required, Validators.minLength(5)]],
      text: this.staticPage.text,
      title: [this.staticPage.title, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });

    this.form.valueChanges.subscribe((changes: IStaticPage) => {
      this.staticPage.isEnabled = changes.isEnabled;
      this.staticPage.sectionTitle = changes.sectionTitle;
      this.staticPage.text = changes.text;
      this.staticPage.title = changes.title;
    });
  }

  saveStaticPage() {
    let action;
    if (this.staticPage.id) {
      action = this.applicationService.updateStaticPage(this.staticPage);
    } else {
      action = this.applicationService.createStaticPage(this.staticPage);
    }
    action.then(() => {
      this.navigateToList();
    });
  }

  cancel() {
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['/settings/pages']).then();
  }

}
