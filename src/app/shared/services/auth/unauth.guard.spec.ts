import { inject, TestBed } from '@angular/core/testing';

import { UnAuthGuard } from './unauth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('UnauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should exist', inject([UnAuthGuard], (guard: UnAuthGuard) => {
    expect(guard).toBeDefined();
  }));
});
