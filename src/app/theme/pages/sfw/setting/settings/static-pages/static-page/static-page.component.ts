import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'static-page',
  templateUrl: './static-page.component.html'
})
export class StaticPageComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() currentStaticPage: number;

  @Output() saveStaticPage: EventEmitter<boolean> = new EventEmitter(false);
  @Output() cancel: EventEmitter<number> = new EventEmitter(false);

  constructor() {
  }

  ngOnInit() {
  }

}
