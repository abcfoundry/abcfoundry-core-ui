import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPage4Component } from './layout-page4.component';

describe('LayoutPage4Component', () => {
  let component: LayoutPage4Component;
  let fixture: ComponentFixture<LayoutPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
