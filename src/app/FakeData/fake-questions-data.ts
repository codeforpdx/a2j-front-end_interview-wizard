import { Validators } from '@angular/forms';
import { StepFormQuestionsGroup } from '../stepper/stepper.component';

export const FAKE_STEP_QUESTIONS: StepFormQuestionsGroup[] = [
  {
    name: 'Address',
    label: 'Please enter your current address.',
    questions: [
      {
        id: 'Street',
        label: 'Street',
        type: 'text',
        validators: [Validators.required],
      },
      {
        id: 'City',
        placeholder: 'City',
        type: 'text',
        validators: [Validators.required],
      },
      {
        id: 'State',
        placeholder: 'State',
        type: 'text',
        validators: [Validators.required],
      },
      {
        id: 'Zipcode',
        placeholder: 'Zip Code',
        type: 'number',
        validators: [Validators.minLength(5), Validators.maxLength(9), Validators.required],
      },
      {
        id: 'What day did you start living here?',
        placeholder: 'Start Date',
        type: 'Date',
        validators: [Validators.required],
      },
      {
        id: 'What day did you stop living here?',
        placeholder: 'End Date',
        type: 'Date',
        validators: [Validators.required],
      }
    ]
  },
  {
    name: 'Address 2',
    label: 'Please enter your alternative address.',
    questions: [
      {
        id: 'Street',
        label: 'Street',
        type: 'text',
        validators: [],
      },
      {
        id: 'City',
        placeholder: 'City',
        type: 'text',
        validators: [],
      },
      {
        id: 'State',
        placeholder: 'State',
        type: 'text',
        validators: [],
      },
      {
        id: 'Zipcode',
        placeholder: 'Zip Code',
        type: 'number',
        validators: [Validators.minLength(5), Validators.maxLength(9)],
      },
      {
        id: 'What day did you start living here?',
        placeholder: 'Start Date',
        type: 'Date',
        validators: [Validators.required],
      },
      {
        id: 'What day did you stop living here?',
        placeholder: 'End Date',
        type: 'Date',
        validators: [Validators.required],
      }

    ]
  },
];
