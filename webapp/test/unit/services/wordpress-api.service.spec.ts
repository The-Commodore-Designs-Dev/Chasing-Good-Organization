import { TestBed } from '@angular/core/testing';

import { WordpressApiService } from '../../../src/app/_services/wordpress-api.service';

describe('WordpressApiService', () => {
  let service: WordpressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
