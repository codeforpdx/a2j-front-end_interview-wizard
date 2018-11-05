import {Validators} from "@angular/forms";

export const mockViews = {
  question_views: {
    viewList: [
      {
        viewName: 'Address History',
        viewQuestions: [
          {
            question_name: 'Address Line 1',
            material_type: 'input',
            required: 'true'
          },
          {
            question_name: 'Address Line 2',
            material_type: 'input',
            required: 'true'
          },
          {
            question_name: 'City',
            material_type: 'autocomplete',
            required: 'true'
          },
          {
            question_name: 'State',
            material_type: 'autocomplete',
            required: 'true'
          },
          {
            question_name: 'Zip Code',
            material_type: 'autocomplete',
            required: 'true'
          },
          {
            question_name: 'Start Date',
            material_type: 'datepicker',
            required: 'true'
          },
          {
            question_name: 'End Date',
            material_type: 'datepicker',
            required: 'true'
          },
          {
            question_name: 'Current Residence?',
            material_type: 'checkbox',
            required: 'true'
          }
        ]
      },
      {
        viewName: 'Appellant Data',
        viewQuestions: ''
      },
      {
        viewName: 'Defendent Data',
        viewQuestions: ''
      },
      {
        viewName: 'Child Data',
        viewQuestions: ''
      },
      {
        viewName: '',
        viewQuestions: ''
      },
      {
        viewName: '',
        viewQuestions: ''
      },
      {}
    ]
  }
};

export const STEP_QUESTIONS = {
  question_views: {
    viewList: [
      {
        viewName: 'Address History',
        viewQuestions: [
          {
            id: 'Address Line 1',
            label: 'Address',
            type: 'text',
            required: true
          },
          {
            id: 'City',
            placeholder: 'City',
            type: 'text',
            required: 'true'
          },
          {
            id: 'State',
            placeholder: 'State',
            type: 'text',
            required: 'true'
          },
          {
            id: 'Zipcode',
            placeholder: 'Zip Code',
            type: 'number',
            validators: [Validators.minLength(5), Validators.maxLength(9)],
            required: 'true'
          },
        ]
      },
      {
        viewName: 'Appellant Data',
        viewQuestions: ''
      },
      {
        viewName: 'Defendent Data',
        viewQuestions: ''
      },
      {
        viewName: 'Child Data',
        viewQuestions: ''
      },
      {
        viewName: '',
        viewQuestions: ''
      },
      {
        viewName: '',
        viewQuestions: ''
      },
      {}
    ]
  }
};
