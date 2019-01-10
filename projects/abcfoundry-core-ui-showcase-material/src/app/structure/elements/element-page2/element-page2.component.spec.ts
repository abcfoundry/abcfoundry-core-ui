import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPage2Component } from './element-page2.component';

describe('ElementPage2Component', () => {
  let component: ElementPage2Component;
  let fixture: ComponentFixture<ElementPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
