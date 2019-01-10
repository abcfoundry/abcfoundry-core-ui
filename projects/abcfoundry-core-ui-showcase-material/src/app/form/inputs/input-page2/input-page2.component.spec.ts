import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage2Component } from './input-page2.component';

describe('InputPage2Component', () => {
  let component: InputPage2Component;
  let fixture: ComponentFixture<InputPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
