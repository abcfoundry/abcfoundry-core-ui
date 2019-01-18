import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMenuPrimaryComponent } from './foundry-menu-primary.component';

describe('FoundryMenuPrimaryComponent', () => {
  let component: FoundryMenuPrimaryComponent;
  let fixture: ComponentFixture<FoundryMenuPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMenuPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMenuPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
