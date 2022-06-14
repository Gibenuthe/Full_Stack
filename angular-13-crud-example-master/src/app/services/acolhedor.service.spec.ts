import { TestBed } from '@angular/core/testing';

import { AcolhedorService } from './acolhedor.service';

describe('AcolhedorService', () => {
  let service: AcolhedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcolhedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
