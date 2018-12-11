import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFabMiniComponent } from './button-fab-mini.component';

describe('ButtonFabMiniComponent', () => {
  let component: ButtonFabMiniComponent;
  let fixture: ComponentFixture<ButtonFabMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFabMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFabMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
