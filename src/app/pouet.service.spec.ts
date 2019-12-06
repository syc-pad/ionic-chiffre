import { TestBed } from '@angular/core/testing';

import { PouetService } from './pouet.service';

describe('PouetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PouetService = TestBed.get(PouetService);
    expect(service).toBeTruthy();
  });
});
