import { TestBed } from '@angular/core/testing';

import { ListallbookingService } from './listallbooking.service';

describe('ListallbookingService', () => {
  let service: ListallbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListallbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
