import { TestBed, inject } from '@angular/core/testing';

import { AktieService } from './aktie.service';

describe('AktieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AktieService]
    });
  });

  it('should be created', inject([AktieService], (service: AktieService) => {
    expect(service).toBeTruthy();
  }));
});
