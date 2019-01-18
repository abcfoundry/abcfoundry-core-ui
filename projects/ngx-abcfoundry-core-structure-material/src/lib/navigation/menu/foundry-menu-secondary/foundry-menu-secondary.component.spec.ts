import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMenuSecondaryComponent } from './foundry-menu-secondary.component';

describe('FoundryMenuSecondaryComponent', () => {
  let component: FoundryMenuSecondaryComponent;
  let fixture: ComponentFixture<FoundryMenuSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMenuSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMenuSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
