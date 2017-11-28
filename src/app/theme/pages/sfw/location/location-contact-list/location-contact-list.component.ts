import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IMember } from '../../../../../shared/interfaces/member.interface';
import { ILocationContact } from '../../../../../shared/interfaces/location-contact.interface';
import { ILocation } from '../../../../../shared/interfaces/location.interface';
import { LocationService } from '../../../../../shared/services/location/location.service';

@Component({
  selector: 'location-contact-list',
  templateUrl: './location-contact-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LocationContactListComponent implements OnInit {

  @Input() members: IMember[];
  @Input() location: ILocation;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  removeContact(index: number) {
    this.location.assignedContacts.splice(index, 1);
    this.locationService.updateLocation(this.location.id, this.location).then(
      () => {
        // ToDo: generate Message
      },
      (error: any) => {
        // ToDo: generate Error-Message
      }
    );
  }

}
