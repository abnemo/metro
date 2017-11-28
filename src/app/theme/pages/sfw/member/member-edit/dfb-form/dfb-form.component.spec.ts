import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfbFormComponent } from './dfb-form.component';

describe('DfbFormComponent', () => {
  let component: DfbFormComponent;
  let fixture: ComponentFixture<DfbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DfbFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
