import { TestBed } from '@angular/core/testing';

import { PostLoginGuardService } from './post-login-guard.service';

describe('PostLoginGuardService', () => {
  let service: PostLoginGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLoginGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
