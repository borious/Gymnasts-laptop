import { TestBed } from '@angular/core/testing';

import { GymnastService } from './gymnast.service';

describe('GymnastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymnastService = TestBed.get(GymnastService);
    expect(service).toBeTruthy();
  });
});
