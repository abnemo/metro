import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../shared/services/script-loader/script-loader.service';


@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './index.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


  constructor(private _script: ScriptLoaderService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /* this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/dashboard.js'); */
  }

}
