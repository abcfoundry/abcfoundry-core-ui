import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPage1Component } from './element-page1.component';

describe('ElementPage1Component', () => {
  let component: ElementPage1Component;
  let fixture: ComponentFixture<ElementPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
