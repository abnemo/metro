import { Component, Input } from '@angular/core';

@Component({

  selector: 'list-link',
  template: `
    <button [class]="cssClass" [routerLink]="['/pages/'+type+'/list']"
            title="{{'general.buttons.listLink' | translate}}">
      <i *ngIf="showIcon" class="fa fa-list"></i>
      <span *ngIf="showText" translate>{{'general.buttons.listLink'}}</span>
    </button>`
})

export class ListLinkComponent {

  @Input() type: string;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;

  constructor() {
  }
}
