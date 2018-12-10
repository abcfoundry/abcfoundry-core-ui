import { TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreStructureMaterialService } from './ngx-abcfoundry-core-structure-material.service';

describe('NgxAbcfoundryCoreStructureMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAbcfoundryCoreStructureMaterialService = TestBed.get(NgxAbcfoundryCoreStructureMaterialService);
    expect(service).toBeTruthy();
  });
});
