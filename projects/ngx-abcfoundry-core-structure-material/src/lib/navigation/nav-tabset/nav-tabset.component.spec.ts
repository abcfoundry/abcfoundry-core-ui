import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabsetComponent } from './nav-tabset.component';

describe('NavTabsetComponent', () => {
  let component: NavTabsetComponent;
  let fixture: ComponentFixture<NavTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
