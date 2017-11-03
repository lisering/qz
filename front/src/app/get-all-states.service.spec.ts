import { TestBed, inject } from '@angular/core/testing';

import { GetAllStatesService } from './get-all-states.service';

describe('GetAllStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllStatesService]
    });
  });

  it('should be created', inject([GetAllStatesService], (service: GetAllStatesService) => {
    expect(service).toBeTruthy();
  }));
});
