import { TestBed } from '@angular/core/testing';

import { ProductRatingsService } from './product-ratings.service';

describe('ProductRatingsService', () => {
  let service: ProductRatingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRatingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
