import { TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreStructureBootstrapService } from './ngx-abcfoundry-core-structure-bootstrap.service';

describe('NgxAbcfoundryCoreStructureBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAbcfoundryCoreStructureBootstrapService = TestBed.get(NgxAbcfoundryCoreStructureBootstrapService);
    expect(service).toBeTruthy();
  });
});
