import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMenuTertiaryComponent } from './foundry-menu-tertiary.component';

describe('FoundryMenuTertiaryComponent', () => {
  let component: FoundryMenuTertiaryComponent;
  let fixture: ComponentFixture<FoundryMenuTertiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMenuTertiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMenuTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
