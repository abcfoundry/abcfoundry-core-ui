import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryHeaderTopComponent } from './foundry-header-top.component';

describe('FoundryHeaderTopComponent', () => {
  let component: FoundryHeaderTopComponent;
  let fixture: ComponentFixture<FoundryHeaderTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryHeaderTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryHeaderTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
