import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILocation } from '../../../../../shared/interfaces/location.interface';

@Component({
  selector: '[location-item]',
  templateUrl: './location-item.component.html'
})
export class LocationItemComponent {

  @Input() location: ILocation;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  constructor() {
  }

}
