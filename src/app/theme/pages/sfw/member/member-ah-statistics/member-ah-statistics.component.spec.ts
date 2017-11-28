import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAhStatisticsComponent } from './member-ah-statistics.component';

describe('MemberAhStatisticsComponent', () => {
  let component: MemberAhStatisticsComponent;
  let fixture: ComponentFixture<MemberAhStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAhStatisticsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAhStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
