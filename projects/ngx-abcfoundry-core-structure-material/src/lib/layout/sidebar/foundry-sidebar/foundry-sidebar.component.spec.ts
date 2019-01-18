import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundrySidebarComponent } from './foundry-sidebar.component';

describe('FoundrySidebarComponent', () => {
  let component: FoundrySidebarComponent;
  let fixture: ComponentFixture<FoundrySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundrySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundrySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
