import { Component, Input } from '@angular/core';
import { IPublication } from '../../../../../shared/interfaces/publication.interface';

@Component({
  selector: 'publication-status',
  templateUrl: './publication-status.component.html',
})

export class PublicationStatusComponent {

  @Input() publication: IPublication;

  constructor() {
  }
}
