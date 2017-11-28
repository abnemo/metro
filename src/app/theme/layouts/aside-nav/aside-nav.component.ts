import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

declare let mLayout: any;
@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {


  constructor() {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {

    mLayout.initAside();
    const menu = (<any>$('#m_aside_left')).mMenu();
    const item = $(menu)
      .find('a[href="' + window.location.pathname + '"]')
      .parent('.m-menu__item');

    (<any>$(menu)
      .data('menu'))
      .setActiveItem(item);
  }

}
