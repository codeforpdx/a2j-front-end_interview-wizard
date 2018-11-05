import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepFormInputType } from './step-form-input/step-form-input.component';

export interface StepFormQuestionsGroup {
  name: string;
  label: string;
  questions: StepFormQuestion[];
}

export interface StepFormQuestion {
  id: string | number;
  label?: string;
  placeholder?: string;
  type: StepFormInputType;
  selectOptions?: string[];
  validators?: Validators[];
}

export interface FinishedMessage {
  label: string;
  text: string;
}

export interface AnswerModels {
  [name: string]: any;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() questionGroup: StepFormQuestionsGroup;
  @Input() finishedMessage: FinishedMessage = {
    label: 'Done',
    text: 'You are now done.'
  };
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
  isLinear = false;
  formGroups: any = [];
  answers: AnswerModels = {};

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    for (const group of this.questionGroup) {
      const controls = group.questions.reduce((acc, cur, index) => {
        this.answers = {...this.answers, [cur.id]: ''};
        return acc = {...acc, [cur.id]: this._formBuilder.control('', Validators.apply([...cur.validators]))};
      }, {});
      this.formGroups = [
        ...this.formGroups,
        {
          group: this._formBuilder.group(controls),
          questions: group.questions,
          controls: controls,
          label: group.label
        }];
    }
  }

  public snapshotModel() {
    console.log('modelChanged', this.formGroups[0].controls['Street'].value);
  }

}
