import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPosition } from '../../../../shared/interfaces/club-management-position.interface';
import { MemberService } from '../../../../shared/services/member/member.service';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html'
})
export class PositionsComponent implements OnInit {

  @Input() item: any;
  @Input() itemType: any;
  @Input() positions: IPosition[];

  @Input() showMembersFromList: boolean = true;
  @Input() showPositionsFromList: boolean = true;

  @Output() removeManagementPosition: EventEmitter<any> = new EventEmitter(false);

  public showForm: boolean = false;

  constructor(public memberService: MemberService) {
  }

  ngOnInit() {
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
