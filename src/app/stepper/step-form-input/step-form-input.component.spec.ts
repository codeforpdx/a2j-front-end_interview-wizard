import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormInputComponent } from './step-form-input.component';

describe('StepFormInputComponent', () => {
  let component: StepFormInputComponent;
  let fixture: ComponentFixture<StepFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
