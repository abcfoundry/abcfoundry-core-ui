import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundrySideComponent } from './foundry-side.component';

describe('FoundrySideComponent', () => {
  let component: FoundrySideComponent;
  let fixture: ComponentFixture<FoundrySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundrySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundrySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
