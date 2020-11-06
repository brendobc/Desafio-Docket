import { TestBed } from '@angular/core/testing';

import { CertidaoService } from './certidao.service';

describe('CertidaoService', () => {
  let service: CertidaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertidaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
