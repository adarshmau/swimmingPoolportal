import { TestBed } from '@angular/core/testing';

import { PreLoginGuardService } from './pre-login-guard.service';

describe('PreLoginGuardService', () => {
  let service: PreLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
