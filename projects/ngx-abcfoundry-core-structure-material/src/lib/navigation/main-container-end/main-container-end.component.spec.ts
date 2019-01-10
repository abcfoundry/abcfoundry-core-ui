import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerEndComponent } from './main-container-end.component';

describe('MainContainerEndComponent', () => {
  let component: MainContainerEndComponent;
  let fixture: ComponentFixture<MainContainerEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContainerEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
