import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundryTemplateComponent } from './foundry-template.component';

describe('FoundryTemplateComponent', () => {
  let component: FoundryTemplateComponent;
  let fixture: ComponentFixture<FoundryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
