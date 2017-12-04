import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html'
})
export class AsideNavComponent implements AfterViewInit {

  @HostBinding('attr.class') class = 'm-grid__item m-aside-left m-aside-left--skin-dark';
  @HostBinding('attr.id') id = 'm_aside_left';

  constructor(private authService: AuthService, private router: Router) {

  }

  signOut() {
    this.authService.signOut().then(
      () => this.router.navigate(['/logout']),
      (error: any) => console.log(error)
    );
  }

  ngAfterViewInit() {
    /*
    const asideOffcanvasClass = ($('#m_aside_left').hasClass('m-aside-left--offcanvas-default')
    ? 'm-aside-left--offcanvas-default' : 'm-aside-left');

    $('#m_aside_left').mOffcanvas({
      class: asideOffcanvasClass,
      overlay: true,
      toggle: {
        target: '#m_aside_left_offcanvas_toggle',
        state: 'm-brand__toggler--active'
      }
    });

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
