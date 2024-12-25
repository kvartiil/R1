import { TestBed } from '@angular/core/testing';

import { ElujouLibService } from './elujou-lib.service';

describe('ElujouLibService', () => {
  let service: ElujouLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElujouLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
