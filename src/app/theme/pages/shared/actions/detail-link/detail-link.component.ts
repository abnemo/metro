import { Component, Input } from '@angular/core';

@Component({

  selector: 'detail-link',
  template: `
    <button *ngIf="object" [class]="cssClass" [routerLink]="['/' + type + '/detail', object.id]"
            title="{{'general.buttons.detailLink' | translate}}">
      <i *ngIf="showIcon" class="fa fa-info"></i>
      <span *ngIf="showText" translate>{{'general.buttons.detailLink'}}</span>
    </button>`
})

export class DetailLinkComponent {

  @Input() object: any;
  @Input() type: string;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;

  constructor() {
  }
}
