import { TestBed } from '@angular/core/testing';

import { TheatorService } from './theator.service';

describe('TheatorService', () => {
  let service: TheatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
