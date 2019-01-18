import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryHeaderComponent } from './foundry-header.component';

describe('FoundryHeaderComponent', () => {
  let component: FoundryHeaderComponent;
  let fixture: ComponentFixture<FoundryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
