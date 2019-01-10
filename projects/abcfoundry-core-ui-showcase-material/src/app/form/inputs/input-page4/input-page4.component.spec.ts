import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage4Component } from './input-page4.component';

describe('InputPage4Component', () => {
  let component: InputPage4Component;
  let fixture: ComponentFixture<InputPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
