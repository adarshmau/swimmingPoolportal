import { TestBed } from '@angular/core/testing';

import { SearchspService } from './searchsp.service';

describe('SearchspService', () => {
  let service: SearchspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
