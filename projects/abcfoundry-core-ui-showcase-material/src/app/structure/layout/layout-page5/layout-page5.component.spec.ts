import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPage5Component } from './layout-page5.component';

describe('LayoutPage5Component', () => {
  let component: LayoutPage5Component;
  let fixture: ComponentFixture<LayoutPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
