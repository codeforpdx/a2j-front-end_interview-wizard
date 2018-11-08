import {Validators} from "@angular/forms";

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
          {
            id: 'Start Date',
            question_name: 'Start Date',
            material_type: 'datepicker',
            required: 'true'
          },
          {
            id: 'End Date',
            question_name: 'End Date',
            material_type: 'datepicker',
            required: 'true'
          },
          {
            id: 'Current Residence?',
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

/*
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

*/