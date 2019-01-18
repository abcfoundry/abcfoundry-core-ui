import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMainTopComponent } from './foundry-main-top.component';

describe('FoundryMainTopComponent', () => {
  let component: FoundryMainTopComponent;
  let fixture: ComponentFixture<FoundryMainTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMainTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMainTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
