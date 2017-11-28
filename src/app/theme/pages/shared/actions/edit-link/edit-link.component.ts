import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'edit-link',
  template: `
    <button [class]="cssClass" [routerLink]="[ '/' + type + '/edit/', object.id]" 
       title="{{'general.buttons.editLink' | translate}}">
      <i *ngIf="showIcon" class="fa fa-edit"></i>
      <span *ngIf="showText">{{'general.buttons.editLink' | translate}}</span>
    </button>`
})

export class EditLinkComponent implements OnInit {

  @Input() object: any;
  @Input() type: string;
  @Input() cssClass: string;
  @Input() showIcon: boolean;
  @Input() showText: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
