import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  pageClass = 'm-grid__item m-footer';
  @HostBinding('attr.class') class = this.pageClass;

  constructor() {

  }

}
