import { TestBed } from '@angular/core/testing';

import { ElujouLib2Service } from './elujou-lib2.service';

describe('ElujouLib2Service', () => {
  let service: ElujouLib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElujouLib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
