import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryFooterTopComponent } from './foundry-footer-top.component';

describe('FoundryFooterTopComponent', () => {
  let component: FoundryFooterTopComponent;
  let fixture: ComponentFixture<FoundryFooterTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryFooterTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryFooterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
