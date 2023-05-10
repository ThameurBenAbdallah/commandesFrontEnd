import { TestBed } from '@angular/core/testing';

import { EstimateLineService } from './estimate-line.service';

describe('EstimateLineService', () => {
  let service: EstimateLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
