import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';
import { AuthService } from '../../../../../../../shared/services/auth/auth.service';
import { MemberService } from '../../../../../../../shared/services/member/member.service';
import {
  booleanConverter,
  InputConverter
} from '../../../../../../../shared/_directives/input-converter/input-converter.directive';
import { IInterview } from '../../../../../../../shared/interfaces/interview.interface';
import { IMember } from '../../../../../../../shared/interfaces/member.interface';
import { ICreation } from '../../../../../../../shared/interfaces/creation.interface';
import * as moment from 'moment';

@Component({
  selector: 'interview-form',
  templateUrl: './interview-form.component.html'
})
export class InterviewFormComponent implements OnInit, OnDestroy {

  @Input() member: IMember;
  @Input() members: IMember[];
  @Input() @InputConverter(booleanConverter) commentsFromOtherMember: boolean = false;

  @Output() updateMember: EventEmitter<any> = new EventEmitter(false);

  public interviewGroup: FormGroup;
  public interview: IInterview;

  private interviewSubscription: ISubscription;

  constructor(private fb: FormBuilder,
    public memberService: MemberService,
    private authService: AuthService) {
  }

  ngOnInit() {

    // ist das Mitglied der Befragte?
    if (!this.commentsFromOtherMember) {
      this.interviewGroup = this.fb.group({
        question: ['', [Validators.required, Validators.minLength(5)]],
        commentator: [''],
        answer: ['', [Validators.required, Validators.minLength(2)]]
      });

    } else { // oder wird ein anderes Mitglied über jemanden ausgefragt?
      this.interviewGroup = this.fb.group({
        question: [''],
        commentator: ['', [Validators.required]],
        answer: ['', [Validators.required, Validators.minLength(2)]]
      });
    }

    this.interviewSubscription = this.interviewGroup.valueChanges.subscribe((values: any) => {
      this.interview = {
        question: values.question ? values.question : '',
        answer: values.answer,
        assignedMember: this.member.id,
        creation: <ICreation>{
          at: moment().toISOString(),
          from: values.commentator ? values.commentator : this.authService.id
        },
        isCommentFromOther: !!values.commentator
      };
    });
  }

  ngOnDestroy() {
    this.interviewSubscription.unsubscribe();
  }

  saveInterview() {
    this.member.interview.push(this.interview);
    this.updateMember.emit();
  }

}
