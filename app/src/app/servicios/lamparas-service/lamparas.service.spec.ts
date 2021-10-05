import { TestBed } from '@angular/core/testing';

import { LamparasService } from './lamparas.service';

describe('LamparasService', () => {
  let service: LamparasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LamparasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
