import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreFormMaterialComponent } from './ngx-abcfoundry-core-form-material.component';

describe('NgxAbcfoundryCoreFormMaterialComponent', () => {
  let component: NgxAbcfoundryCoreFormMaterialComponent;
  let fixture: ComponentFixture<NgxAbcfoundryCoreFormMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAbcfoundryCoreFormMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAbcfoundryCoreFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
