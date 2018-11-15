import { Validators } from '@angular/forms';
import { StepFormQuestionsGroup } from '../stepper/stepper.component';

import { STATE_LIST } from './state_list';

export const FAKE_STEP_QUESTIONS: StepFormQuestionsGroup[] = [
  {
    name: 'Petitioner Details',
    label: 'Please enter your personal information below',
    questions: [
      {
        id: 'petitioner_first_name',
        label: 'First name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_middle_name',
        label: 'Middle Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_last_name',
        label: 'Last Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_maiden_name',
        label: 'Maiden Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_dob',
        label: 'Date of Birth',
        type: 'date',
        validators: [],
        hidden: true
      },
      {
        id: 'petitioner_ssn',
        label: 'Social Security Number',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_dob',
        label: 'Driver\'s License #',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_drivers_license',
        label: 'Nickname',
        type: 'text',
        validators: [],
      },
      {
        id: 'petitioner_nickname',
        label: 'If you have another name you prefer to be referred to as, please list it here.',
        type: 'text',
        validators: [],
      }
    ]
  },
  {
    name: 'Respondent Details',
    label: 'Please provide the following details about the person you are filing against',
    questions: [
      {
        id: 'respondent_first_name',
        label: 'First name',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_middle_name',
        label: 'Middle Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_last_name',
        label: 'Last Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_maiden_name',
        label: 'Maiden Name',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_dob',
        label: 'Date of Birth',
        type: 'date',
        validators: [],
      },
      {
        id: 'respondent_ssn',
        label: 'Social Security Number',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_dob',
        label: 'DOB',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_drivers_license',
        label: 'Driver\s License',
        type: 'text',
        validators: [],
      },
      {
        id: 'respondent_nickname',
        label: 'If the respondent has another name you prefer to be referred to as, please list it here.',
        type: 'text',
        validators: [],
      }
    ]
  },
  {
    name: 'Address Details',
    label: 'Please enter your address.',
    questions: [
      {
        id: 'Street',
        label: 'Address',
        type: 'autoComplete',
        validators: [Validators.required],
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
        type: 'date',
        validators: [Validators.required],
      },
      {
        id: 'What day did you stop living here?',
        placeholder: 'End Date',
        type: 'date',
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
        type: 'date',
        validators: [Validators.required],
      },
      {
        id: 'What day did you stop living here?',
        placeholder: 'End Date',
        type: 'date',
        validators: [Validators.required],
      }

    ]
  },
   {
    name: 'Children Details',
    label: '',
    questions: [
      {
        id: 'child_number',
        label: 'Enter the number of children you are claiming:',
        type: 'text',
        validators: [],
        selectOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      {
        id: 'City',
        placeholder: 'City',
        type: 'text',
        validators: [],
        behaviors: [
          {
            behaviorName: 'hideUntil',
            watchField: 'child_number',
            condition: '> 0'
          }
        ]
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
        type: 'date',
        validators: [Validators.required],
      },
      {
        id: 'What day did you stop living here?',
        placeholder: 'End Date',
        type: 'date',
        validators: [Validators.required],
      }

    ]
  },  
];
