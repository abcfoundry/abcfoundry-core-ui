import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundrySidebarTopComponent } from './foundry-sidebar-top.component';

describe('FoundrySidebarTopComponent', () => {
  let component: FoundrySidebarTopComponent;
  let fixture: ComponentFixture<FoundrySidebarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundrySidebarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundrySidebarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
