import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreStructureBootstrapComponent } from './ngx-abcfoundry-core-structure-bootstrap.component';

describe('NgxAbcfoundryCoreStructureBootstrapComponent', () => {
  let component: NgxAbcfoundryCoreStructureBootstrapComponent;
  let fixture: ComponentFixture<NgxAbcfoundryCoreStructureBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAbcfoundryCoreStructureBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAbcfoundryCoreStructureBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
