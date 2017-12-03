import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './default.component.html'
})
export class DefaultComponent {

  pageClass = 'm-grid__item m-grid__item--fluid m-wrapper';
  @HostBinding('attr.class') class = this.pageClass;

  constructor() {
  }

}
