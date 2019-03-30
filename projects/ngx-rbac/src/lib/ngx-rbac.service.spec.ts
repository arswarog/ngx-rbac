import { TestBed } from '@angular/core/testing';

import { NgxRbacService } from './ngx-rbac.service';

describe('NgxRbacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRbacService = TestBed.get(NgxRbacService);
    expect(service).toBeTruthy();
  });
});
