import { TestBed } from '@angular/core/testing';

import { Admin1Guard } from './admin1.guard';

describe('Admin1Guard', () => {
  let guard: Admin1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Admin1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
