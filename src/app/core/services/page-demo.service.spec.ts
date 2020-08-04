import { TestBed } from '@angular/core/testing';

import { PageDemoService } from './page-demo.service';

describe('PageDemoService', () => {
  let service: PageDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
