import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPage3Component } from './element-page3.component';

describe('ElementPage3Component', () => {
  let component: ElementPage3Component;
  let fixture: ComponentFixture<ElementPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
