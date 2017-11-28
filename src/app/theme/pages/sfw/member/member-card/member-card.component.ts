import { Component, Input, OnInit } from '@angular/core';
import {
  booleanConverter,
  InputConverter
}
  from '../../../../../shared/_directives/input-converter/input-converter.directive';
import { IMember } from '../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input() member: IMember;
  @Input() bgColor: string = 'red';
  @Input() @InputConverter(booleanConverter) showIcons: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
