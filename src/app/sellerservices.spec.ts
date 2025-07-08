import { TestBed } from '@angular/core/testing';

import { Sellerservices } from './sellerservices';

describe('Sellerservices', () => {
  let service: Sellerservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sellerservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
