import { TestBed } from '@angular/core/testing';

import { ImgSrvcService } from '../../../src/app/_services/img-srvc.service';

describe('ImgSrvcService', () => {
  let service: ImgSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
