import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage3Component } from './button-page3.component';

describe('ButtonPage3Component', () => {
  let component: ButtonPage3Component;
  let fixture: ComponentFixture<ButtonPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
