import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryFooterComponent } from './foundry-footer.component';

describe('FoundryFooterComponent', () => {
  let component: FoundryFooterComponent;
  let fixture: ComponentFixture<FoundryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
