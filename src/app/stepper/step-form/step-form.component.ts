import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StepFormInputType} from './step-form-input/step-form-input.component';

export interface StepFormQuestionsGroup {
  name: string;
  questions: StepFormQuestion[];
}

export interface StepFormQuestion {
  id: string | number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type: StepFormInputType;
  selectOptions?: string[];
  validators?: Validators[];
}

export interface AnswerModels {
  [name: string]: any;
}

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {
  @Input() name: string;
  @Input() questions: StepFormQuestion[] = [];
  @Input() formGroup: FormGroup;
  @Output() modelsChanges: EventEmitter<AnswerModels> = new EventEmitter();
  answers: AnswerModels = {};
  formReady = false;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.generateFormGroup());
    this.answers = this.initializeAnswersContainer()
      .then(answersModel => {
        console.log('ans', answersModel);
        this.answers = answersModel;
        this.formReady = true;
      });
  }

  async initializeAnswersContainer(): AnswerModels {
    const response: AnswerModels = {};
    for (const question of this.questions) {
      const {type} = question;
      switch (type) {
        case 'textarea':
        case'text':
          response[question.id] = '';
          continue;
        case'date':
          response[question.id] = null;
          continue;
        case'number':
          response[question.id] = null;
          continue;
        case'select':
          response[question.id] = '';
          continue;
        default:
          console.error('A question has no type: ', question);
      }
    }
      return response;
  }

  handleOnInput(inputProps: {id: string | number, value: string | number | Date}) {
    this.answers = {...this.answers, ...inputProps};
    this.modelsChanges.emit(this.answers);
  }
}
