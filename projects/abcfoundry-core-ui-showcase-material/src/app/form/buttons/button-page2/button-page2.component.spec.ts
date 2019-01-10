import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage2Component } from './button-page2.component';

describe('ButtonPage2Component', () => {
  let component: ButtonPage2Component;
  let fixture: ComponentFixture<ButtonPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
