import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewListComponent } from './interview-list.component';

describe('InterviewListComponent', () => {
  let component: InterviewListComponent;
  let fixture: ComponentFixture<InterviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
