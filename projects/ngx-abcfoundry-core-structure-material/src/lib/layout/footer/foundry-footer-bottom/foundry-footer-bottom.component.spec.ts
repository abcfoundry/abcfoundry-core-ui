import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryFooterBottomComponent } from './foundry-footer-bottom.component';

describe('FoundryFooterBottomComponent', () => {
  let component: FoundryFooterBottomComponent;
  let fixture: ComponentFixture<FoundryFooterBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryFooterBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryFooterBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
