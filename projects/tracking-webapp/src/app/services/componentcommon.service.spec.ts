import { TestBed } from '@angular/core/testing';

import { ComponentcommonService } from './componentcommon.service';

describe('ComponentcommonService', () => {
  let service: ComponentcommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentcommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
