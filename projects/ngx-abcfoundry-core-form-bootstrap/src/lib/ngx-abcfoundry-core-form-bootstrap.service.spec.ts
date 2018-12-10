import { TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreFormBootstrapService } from './ngx-abcfoundry-core-form-bootstrap.service';

describe('NgxAbcfoundryCoreFormBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAbcfoundryCoreFormBootstrapService = TestBed.get(NgxAbcfoundryCoreFormBootstrapService);
    expect(service).toBeTruthy();
  });
});
