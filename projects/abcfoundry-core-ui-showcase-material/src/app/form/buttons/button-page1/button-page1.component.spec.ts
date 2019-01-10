import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage1Component } from './button-page1.component';

describe('ButtonPage1Component', () => {
  let component: ButtonPage1Component;
  let fixture: ComponentFixture<ButtonPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
