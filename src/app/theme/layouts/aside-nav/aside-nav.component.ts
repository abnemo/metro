import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html'
})
export class AsideNavComponent implements OnInit, AfterViewInit {

  // m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark
  @HostBinding('attr.class') class = 'm-grid__item m-aside-left m-aside-left--skin-dark';
  @HostBinding('attr.id') id = 'm_aside_left';

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    /*
    mLayout.initAside();
    const menu = (<any>$('#m_aside_left')).mMenu();
    const item = $(menu)
      .find('a[href="' + window.location.pathname + '"]')
      .parent('.m-menu__item');

    (<any>$(menu)
      .data('menu'))
      .setActiveItem(item);
      */
  }

}
