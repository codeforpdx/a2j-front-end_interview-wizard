import { Component } from '@angular/core';
import { mockViews } from '../question_views';
import { FAKE_STEP_QUESTIONS } from '../../FakeData/fake-questions-data';
import { StepFormQuestionsGroup } from '../../stepper/stepper.component';

@Component({
  selector: 'app-wizard-modal-card',
  templateUrl: './wizard-modal-card.component.html',
  styleUrls: ['./wizard-modal-card.component.scss']
})
export class WizardModalCardComponent {
  fakeQuestionsData: StepFormQuestionsGroup[] = FAKE_STEP_QUESTIONS;
}

// Example of the interfaces you could use with the previous data-shape

// export interface MockViews {
//   question_views: {
//     viewList: MockView[];
//   };
// }
//
// export interface MockView {
//   viewName: string;
//   viewQuestions: MockQuestion[];
// }
//
// export interface MockQuestion {
//   question_name: string;
//   material_type: string;
//   required: boolean;
// }
