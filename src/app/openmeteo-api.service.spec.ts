import { TestBed } from '@angular/core/testing';

import { OpenmeteoApiService } from './openmeteo-api.service';

describe('OpenmeteoApiService', () => {
  let service: OpenmeteoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenmeteoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
