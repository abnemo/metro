import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-social-data',
  templateUrl: './settings-social-data.component.html'
})
export class SettingsSocialDataComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
