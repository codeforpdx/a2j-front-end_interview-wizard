import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardModalCardComponent } from './wizard-modal-card.component';

describe('WizardModalCardComponent', () => {
  let component: WizardModalCardComponent;
  let fixture: ComponentFixture<WizardModalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardModalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardModalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
