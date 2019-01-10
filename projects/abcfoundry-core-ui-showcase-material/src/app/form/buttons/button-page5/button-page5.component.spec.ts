import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage5Component } from './button-page5.component';

describe('ButtonPage5Component', () => {
  let component: ButtonPage5Component;
  let fixture: ComponentFixture<ButtonPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
