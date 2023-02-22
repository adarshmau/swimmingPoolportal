import { TestBed } from '@angular/core/testing';

import { ListspService } from './listsp.service';

describe('ListspService', () => {
  let service: ListspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
