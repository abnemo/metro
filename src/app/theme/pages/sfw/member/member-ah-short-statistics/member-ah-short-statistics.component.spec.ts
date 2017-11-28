import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAhShortStatisticsComponent } from './member-ah-short-statistics.component';

describe('MemberAhShortStatisticsComponent', () => {
  let component: MemberAhShortStatisticsComponent;
  let fixture: ComponentFixture<MemberAhShortStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAhShortStatisticsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAhShortStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
