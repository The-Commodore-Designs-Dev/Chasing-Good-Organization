import { TestBed } from '@angular/core/testing';

import { UrlSrvcService } from '../../../src/app/_services/url-srvc.service';

describe('UrlSrvcService', () => {
  let service: UrlSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
