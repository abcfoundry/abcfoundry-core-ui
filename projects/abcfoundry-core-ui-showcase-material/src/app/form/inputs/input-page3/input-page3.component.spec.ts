import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage3Component } from './input-page3.component';

describe('InputPage3Component', () => {
  let component: InputPage3Component;
  let fixture: ComponentFixture<InputPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
