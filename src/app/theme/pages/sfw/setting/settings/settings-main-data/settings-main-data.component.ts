import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'settings-main-data',
  templateUrl: './settings-main-data.component.html'
})
export class SettingsMainDataComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
