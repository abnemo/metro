import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { IApplication } from '../../../../../shared/interfaces/application.interface';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../../../../shared/services/application/application.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './static-pages.component.html'
})
export class StaticPagesComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  public application: IApplication;

  constructor(private route: ActivatedRoute,
    public applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { application: IApplication }) => this.application = data.application);
  }

}
