import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberShortStatisticsComponent } from './member-short-statistics.component';

describe('MemberShortStatisticsComponent', () => {
  let component: MemberShortStatisticsComponent;
  let fixture: ComponentFixture<MemberShortStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberShortStatisticsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberShortStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
