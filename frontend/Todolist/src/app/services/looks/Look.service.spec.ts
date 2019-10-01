/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LookService } from './Look.service';

describe('Service: Look', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookService]
    });
  });

  it('should ...', inject([LookService], (service: LookService) => {
    expect(service).toBeTruthy();
  }));
});
