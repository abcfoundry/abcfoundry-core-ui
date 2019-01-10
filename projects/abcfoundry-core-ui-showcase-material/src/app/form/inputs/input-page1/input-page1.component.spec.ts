import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage1Component } from './input-page1.component';

describe('InputPage1Component', () => {
  let component: InputPage1Component;
  let fixture: ComponentFixture<InputPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
