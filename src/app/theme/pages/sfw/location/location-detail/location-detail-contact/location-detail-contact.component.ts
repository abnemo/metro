import { Component, Input } from '@angular/core';
import { ILocation } from '../../../../../../shared/interfaces/location.interface';
import { IMember } from '../../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'location-detail-contact',
  templateUrl: './location-detail-contact.component.html'
})
export class LocationDetailContactComponent {

  @Input() location: ILocation;
  @Input() members: IMember[];

  constructor() {
  }

}
