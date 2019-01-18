import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryHeaderBottomComponent } from './foundry-header-bottom.component';

describe('FoundryHeaderBottomComponent', () => {
  let component: FoundryHeaderBottomComponent;
  let fixture: ComponentFixture<FoundryHeaderBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryHeaderBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
