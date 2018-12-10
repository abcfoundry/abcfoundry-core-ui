import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreStructureMaterialComponent } from './ngx-abcfoundry-core-structure-material.component';

describe('NgxAbcfoundryCoreStructureMaterialComponent', () => {
  let component: NgxAbcfoundryCoreStructureMaterialComponent;
  let fixture: ComponentFixture<NgxAbcfoundryCoreStructureMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAbcfoundryCoreStructureMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAbcfoundryCoreStructureMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
