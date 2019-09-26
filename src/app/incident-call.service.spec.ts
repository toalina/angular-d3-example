import { TestBed } from '@angular/core/testing';

import { IncidentCallService } from './incident-call.service';

describe('IncidentCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidentCallService = TestBed.get(IncidentCallService);
    expect(service).toBeTruthy();
  });
});
