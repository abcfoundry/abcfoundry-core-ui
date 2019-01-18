import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMainBottomComponent } from './foundry-main-bottom.component';

describe('FoundryMainBottomComponent', () => {
  let component: FoundryMainBottomComponent;
  let fixture: ComponentFixture<FoundryMainBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMainBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMainBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
