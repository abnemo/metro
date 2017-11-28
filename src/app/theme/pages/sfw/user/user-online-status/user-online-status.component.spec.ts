import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnlineStatusComponent } from './user-online-status.component';

describe('UserOnlineStatusComponent', () => {
  let component: UserOnlineStatusComponent;
  let fixture: ComponentFixture<UserOnlineStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserOnlineStatusComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnlineStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
