import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage5Component } from './input-page5.component';

describe('InputPage5Component', () => {
  let component: InputPage5Component;
  let fixture: ComponentFixture<InputPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
