import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage4Component } from './button-page4.component';

describe('ButtonPage4Component', () => {
  let component: ButtonPage4Component;
  let fixture: ComponentFixture<ButtonPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
