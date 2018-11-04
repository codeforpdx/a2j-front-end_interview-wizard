import { Validators } from '@angular/forms';
import {StepFormQuestionsGroup} from '../stepper/step-form/step-form.component';

export const FAKE_STEP_QUESTIONS: StepFormQuestionsGroup[] = [
  {
    name: 'Address History',
    questions: [
      {
        id: 'Address',
        label: 'Address',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'City',
        placeholder: 'City',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'State',
        placeholder: 'State',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'Zipcode',
        placeholder: 'Zip Code',
        type: 'number',
        validators: [Validators.minLength(5), Validators.maxLength(9)],
        required: true
      },
    ]
  },
  {
    name: 'Address Foo',
    questions: [
      {
        id: 'Address',
        label: 'Address',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'City',
        placeholder: 'City',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'State',
        placeholder: 'State',
        type: 'text',
        validators: [],
        required: true
      },
      {
        id: 'Zipcode',
        placeholder: 'Zip Code',
        type: 'number',
        validators: [Validators.minLength(5), Validators.maxLength(9)],
        required: true
      },
    ]
  }
];
