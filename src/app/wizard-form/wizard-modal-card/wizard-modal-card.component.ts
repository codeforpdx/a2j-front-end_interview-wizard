import { Component, OnInit } from '@angular/core';
import { mockViews } from '../question_views';
import { StepFormQuestionsGroup } from '../../stepper/step-form/step-form.component';
import { FAKE_STEP_QUESTIONS } from '../../FakeData/fake-questions-data';


@Component({
  selector: 'app-wizard-modal-card',
  templateUrl: './wizard-modal-card.component.html',
  styleUrls: ['./wizard-modal-card.component.scss']
})
export class WizardModalCardComponent implements OnInit {
  isLinear = false;
  fakeQuestionsData: StepFormQuestionsGroup[] = FAKE_STEP_QUESTIONS;
  constructor() {}

  ngOnInit() {
    // this is what I was saying about the key, "firstCtrl" and "firstFormGroup"
    // being defined and if we have dynamic questions it would
    // mean dynamic controls and that means generating dynamic keys. Doable, just hack-y,
    // I think I can make a reusable form component and it would solve that problem, or at least hide it.
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

}

export interface MockViews {
  question_views: {
    viewList: MockView[];
  };
}

export interface MockView {
  viewName: string;
  viewQuestions: MockQuestion[];
}

export interface MockQuestion {
  question_name: string;
  material_type: string;
  required: boolean;
}
