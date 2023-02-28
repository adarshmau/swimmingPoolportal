import { TestBed } from '@angular/core/testing';

import { RequestFilterInterceptorService } from './request-filter-interceptor.service';

describe('RequestFilterInterceptorService', () => {
  let service: RequestFilterInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestFilterInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
