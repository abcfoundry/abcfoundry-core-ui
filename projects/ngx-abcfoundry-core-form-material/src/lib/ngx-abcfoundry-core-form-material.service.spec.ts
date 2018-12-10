import { TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreFormMaterialService } from './ngx-abcfoundry-core-form-material.service';

describe('NgxAbcfoundryCoreFormMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAbcfoundryCoreFormMaterialService = TestBed.get(NgxAbcfoundryCoreFormMaterialService);
    expect(service).toBeTruthy();
  });
});
