import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAbcfoundryCoreFormBootstrapComponent } from './ngx-abcfoundry-core-form-bootstrap.component';

describe('NgxAbcfoundryCoreFormBootstrapComponent', () => {
  let component: NgxAbcfoundryCoreFormBootstrapComponent;
  let fixture: ComponentFixture<NgxAbcfoundryCoreFormBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAbcfoundryCoreFormBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAbcfoundryCoreFormBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
