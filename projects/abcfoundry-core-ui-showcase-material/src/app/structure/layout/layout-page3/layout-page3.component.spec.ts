import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPage3Component } from './layout-page3.component';

describe('LayoutPage3Component', () => {
  let component: LayoutPage3Component;
  let fixture: ComponentFixture<LayoutPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
