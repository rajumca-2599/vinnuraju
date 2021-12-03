import { TestBed } from '@angular/core/testing';

import { Admin11Guard } from './admin11.guard';

describe('Admin11Guard', () => {
  let guard: Admin11Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Admin11Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
