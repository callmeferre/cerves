import { TestBed } from '@angular/core/testing';

import { BeerAPiService } from './beer-api.service';

describe('BeerAPiService', () => {
  let service: BeerAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
