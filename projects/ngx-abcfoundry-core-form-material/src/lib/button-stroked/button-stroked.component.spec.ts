import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStrokedComponent } from './button-stroked.component';

describe('ButtonStokedComponent', () => {
  let component: ButtonStrokedComponent;
  let fixture: ComponentFixture<ButtonStrokedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonStrokedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStrokedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
