import { TestBed } from '@angular/core/testing';

import { DeactvateGuard } from './deactvate.guard';

describe('DeactvateGuard', () => {
  let guard: DeactvateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactvateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
