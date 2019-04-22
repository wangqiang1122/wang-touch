import { TestBed } from '@angular/core/testing';

import { NewworkService } from './newwork.service';

describe('NewworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewworkService = TestBed.get(NewworkService);
    expect(service).toBeTruthy();
  });
});
