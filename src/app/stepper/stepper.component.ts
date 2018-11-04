import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StepFormQuestion, StepFormQuestionsGroup} from './step-form/step-form.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() questionGroup: StepFormQuestionsGroup;
  isLinear = false;
  formGroups: any = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    for (const group of this.questionGroup) {
      const controls = group.questions.reduce((acc, cur, index) => {
        return acc = {...acc, [cur.id]: this._formBuilder.control('', Validators.apply([...cur.validators]))};
      }, {});
      console.log(controls);
      this.formGroups = [ ...this.formGroups, {group: this._formBuilder.group(controls), questions: group.questions}];
    }
    console.log('count', this.formGroups);
  }
  //
  // generateFormGroup(): FormArray {
  //   const controlArray =  this.questions.map((question: StepFormQuestion) => {
  //     const {type} = question;
  //     switch (type) {
  //       case'text':
  //       case 'textarea':
  //         return this.fb.control('', Validators.apply([...question.validators]));
  //       case'date':
  //         return this.fb.control(null, Validators.apply([...question.validators]));
  //       case'number':
  //         return this.fb.control(null, Validators.apply([...question.validators]));
  //       case'select':
  //         return this.fb.control([], Validators.apply([...question.validators]));
  //       default:
  //         console.error('A question has no type: ', question);
  //     }
  //   });
  //   return this.fb.array(controlArray);
  // }

}
