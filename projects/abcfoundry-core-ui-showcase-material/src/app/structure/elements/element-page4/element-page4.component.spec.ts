import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPage4Component } from './element-page4.component';

describe('ElementPage4Component', () => {
  let component: ElementPage4Component;
  let fixture: ComponentFixture<ElementPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
