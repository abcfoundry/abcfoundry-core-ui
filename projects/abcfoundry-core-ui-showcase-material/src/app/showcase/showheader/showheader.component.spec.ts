import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowheaderComponent } from './showheader.component';

describe('ShowheaderComponent', () => {
  let component: ShowheaderComponent;
  let fixture: ComponentFixture<ShowheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
