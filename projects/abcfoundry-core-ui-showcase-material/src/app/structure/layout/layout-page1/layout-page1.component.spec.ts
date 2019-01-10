import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPage1Component } from './layout-page1.component';

describe('LayoutPage1Component', () => {
  let component: LayoutPage1Component;
  let fixture: ComponentFixture<LayoutPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
