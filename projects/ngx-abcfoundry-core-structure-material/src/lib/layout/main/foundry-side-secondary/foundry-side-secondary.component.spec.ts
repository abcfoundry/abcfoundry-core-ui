import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundrySideSecondaryComponent } from './foundry-side-secondary.component';

describe('FoundrySideSecondaryComponent', () => {
  let component: FoundrySideSecondaryComponent;
  let fixture: ComponentFixture<FoundrySideSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundrySideSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundrySideSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
