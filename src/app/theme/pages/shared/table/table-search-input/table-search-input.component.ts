import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'table-search-input',
  templateUrl: './table-search-input.component.html'
})
export class TableSearchInputComponent implements OnInit {

  @Output() searchFor: EventEmitter<string> = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }

}
