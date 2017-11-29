import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'static-page',
  templateUrl: './static-page.component.html'
})
export class StaticPageComponent implements OnChanges {

  @Input() form: FormGroup;
  @Input() currentStaticPage: number;

  constructor() {
  }

  ngOnChanges() {
    console.log(this.currentStaticPage);
    if (this.currentStaticPage) {
      console.log(this.form.controls['staticPages']['controls'][this.currentStaticPage].controls);
    }
  }

}
