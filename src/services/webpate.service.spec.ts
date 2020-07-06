import { TestBed } from '@angular/core/testing';

import { WebpateService } from './webpate.service';

describe('WebpateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebpateService = TestBed.get(WebpateService);
    expect(service).toBeTruthy();
  });
});
