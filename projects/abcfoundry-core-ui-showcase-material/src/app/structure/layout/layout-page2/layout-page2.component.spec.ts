import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPage2Component } from './layout-page2.component';

describe('LayoutPage2Component', () => {
  let component: LayoutPage2Component;
  let fixture: ComponentFixture<LayoutPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
