import { TestBed } from '@angular/core/testing';

import { CheckPositionService } from './check-position.service';

describe('CheckPositionService', () => {
  let service: CheckPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
