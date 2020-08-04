import { TestBed } from '@angular/core/testing';

import { AdminLayDsNguoiDungService } from './admin-lay-ds-nguoi-dung.service';

describe('AdminLayDsNguoiDungService', () => {
  let service: AdminLayDsNguoiDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLayDsNguoiDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
