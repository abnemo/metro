import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'static-pages',
  templateUrl: './static-pages.component.html'
})
export class StaticPagesComponent implements OnInit {

  @Input() form: FormGroup;

  @Input() currentStaticPage: number;

  @Output() addStaticPage: EventEmitter<boolean> = new EventEmitter(false);
  @Output() setCurrentStaticPage: EventEmitter<number> = new EventEmitter(false);
  @Output() saveStaticPage: EventEmitter<boolean> = new EventEmitter(false);
  @Output() cancel: EventEmitter<boolean> = new EventEmitter(false);
  @Output() removeStaticPage: EventEmitter<number> = new EventEmitter(false);

  public config: PerfectScrollbarConfigInterface = {};

  constructor() {
  }

  ngOnInit() {
  }

}
