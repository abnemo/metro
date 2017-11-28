import { Component, Input } from '@angular/core';

@Component({

  selector: 'media-link',
  template: `
    <button [class]="cssClass" [routerLink]="['/' + type + '/media/' + object.id]" 
            title="{{'general.buttons.mediaLink' | translate}}">
      <i *ngIf="showIcon" class="fa fa-upload"></i>
      <span *ngIf="showText" translate>{{'general.buttons.mediaLink'}}</span>
    </button>`
})

export class MediaLinkComponent {

  @Input() object: any;
  @Input() type: string;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;

  constructor() {
  }

}
