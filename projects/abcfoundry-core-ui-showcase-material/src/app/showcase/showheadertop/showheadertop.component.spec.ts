import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowheadertopComponent } from './showheadertop.component';

describe('ShowheadertopComponent', () => {
  let component: ShowheadertopComponent;
  let fixture: ComponentFixture<ShowheadertopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowheadertopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowheadertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
