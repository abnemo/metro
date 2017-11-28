import { Component } from '@angular/core';
import { LocationService } from '../../../../../shared/services/location/location.service';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { CategoryService } from '../../../../../shared/services/category/category.service';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './locations.component.html'
})
export class LocationsComponent {

  constructor(public categoryService: CategoryService,
    public categoryTypeService: CategoryTypeService,
    public locationService: LocationService) {
  }

}
