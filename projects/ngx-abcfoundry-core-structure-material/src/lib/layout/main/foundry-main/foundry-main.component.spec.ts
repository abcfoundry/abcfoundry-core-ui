import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryMainComponent } from './foundry-main.component';

describe('FoundryMainComponent', () => {
  let component: FoundryMainComponent;
  let fixture: ComponentFixture<FoundryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
