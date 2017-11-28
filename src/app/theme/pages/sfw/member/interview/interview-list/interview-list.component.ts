import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  booleanConverter,
  InputConverter
} from '../../../../../../shared/_directives/input-converter/input-converter.directive';
import { IMember } from '../../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: [
    'interview-list.component.css'
  ]
})
export class InterviewListComponent implements OnInit {

  @Input() member: IMember;
  @Input() members: IMember[];
  @Input() @InputConverter(booleanConverter) showLink: boolean = true;
  @Input() @InputConverter(booleanConverter) commentsFromOtherMember: boolean = false;

  @Output() deleteInterview = new EventEmitter(false);

  constructor() {
  }

  ngOnInit() {
  }


}
