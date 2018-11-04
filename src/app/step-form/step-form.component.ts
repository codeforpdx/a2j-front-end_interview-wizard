import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface StepFormQuestion {
  id: string | number;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  selectOptions?: string[];
  validators: Validators[];
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
  @Input() questions: StepFormQuestion[];
  @Output() modelsChanges: EventEmitter<AnswerModels> = new EventEmitter();
  formGroup: FormGroup = this.fb.group({});
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup.addControl(this.name, this.generateFormGroup());
  }

  generateFormGroup(): FormArray {
    const controlArray =  this.questions.map((question: StepFormQuestion) => {
      const {type} = question;
      switch (type) {
        case'text':
        case 'textarea':
          return this.fb.control('', Validators.apply([...question.validators]));
        case'date':
          return this.fb.control(null, Validators.apply([...question.validators]));
        case'number':
          return this.fb.control(null, Validators.apply([...question.validators]));
        case'select':
          return this.fb.control([], Validators.apply([...question.validators]));
      }
    });
    return this.fb.array(controlArray);
  }
}
