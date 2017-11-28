import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from '../../../../../../shared/interfaces/member.interface';

@Component({
  selector: 'interview-edit',
  templateUrl: './interview-edit.component.html'
})
export class InterviewEditComponent implements OnInit {

  public member: IMember;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { member: IMember }) => this.member = data.member);
  }

}
