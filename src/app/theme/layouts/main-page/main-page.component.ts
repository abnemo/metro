import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  @HostBinding('attr.class') class = 'm-grid__item m-grid__item--fluid m-wrapper';

  constructor() {
  }

}
