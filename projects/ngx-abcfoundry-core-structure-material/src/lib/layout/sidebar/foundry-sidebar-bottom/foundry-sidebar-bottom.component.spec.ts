import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundrySidebarBottomComponent } from './foundry-sidebar-bottom.component';

describe('FoundrySidebarBottomComponent', () => {
  let component: FoundrySidebarBottomComponent;
  let fixture: ComponentFixture<FoundrySidebarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundrySidebarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundrySidebarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
