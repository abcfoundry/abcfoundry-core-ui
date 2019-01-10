import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPage5Component } from './element-page5.component';

describe('ElementPage5Component', () => {
  let component: ElementPage5Component;
  let fixture: ComponentFixture<ElementPage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
