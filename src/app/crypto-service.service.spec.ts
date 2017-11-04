import { TestBed, inject } from '@angular/core/testing';

import { CryptoService } from './crypto-service.service';

describe('CryptoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoService]
    });
  });

  it('should be created', inject([CryptoService], (service: CryptoService) => {
    expect(service).toBeTruthy();
  }));
});
