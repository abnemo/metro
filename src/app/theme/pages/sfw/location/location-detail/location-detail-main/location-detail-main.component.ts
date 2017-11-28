import { Component, Input } from '@angular/core';
import { ILocation } from '../../../../../../shared/interfaces/location.interface';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';

@Component({
  selector: 'location-detail-main',
  templateUrl: 'location-detail-main.component.html'
})

export class LocationDetailMainComponent {

  @Input() location: ILocation;
  @Input() categories: ICategory[];

  constructor() {
  }

}
