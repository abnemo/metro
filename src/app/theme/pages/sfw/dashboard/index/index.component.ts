import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/dashboard.js'); */
  }

}
