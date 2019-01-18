import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMenuSocialComponent } from './foundry-menu-social.component';

describe('FoundryMenuSocialComponent', () => {
  let component: FoundryMenuSocialComponent;
  let fixture: ComponentFixture<FoundryMenuSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMenuSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMenuSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
