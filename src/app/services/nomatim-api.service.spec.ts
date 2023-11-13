import { TestBed } from '@angular/core/testing';

import { NomatimApiService } from './nomatim-api.service';

describe('NomatimApiService', () => {
  let service: NomatimApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomatimApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
