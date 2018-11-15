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
  selectOptions?: any[];
  validators?: any[];
  hidden?: boolean;
  behaviors?: any[];
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
  @Input() questionGroup: StepFormQuestionsGroup[];
  @Input() finishedMessage: FinishedMessage = {
    label: 'Done',
    text: 'You are now done.' 
  };
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
  isLinear = true;
  formGroups: any = [];
  answers: AnswerModels = {};
  formsReady = false;


  setHidden(currentQuestion){
    for (let subQuestionObject of currentQuestion){
      console.log("subQuestionObject is:"+ Object.getOwnPropertyNames(subQuestionObject))
      if (subQuestionObject.prototype.hasOwnProperty('hidden')){
        if (subQuestionObject.hidden === true){
          //hide this object 
            //HOW???????
            //set an element on this as 

            //"unused label".  How do I assign this down?
              //Do I pass it through nGX down to the next element through each 
            
              //Perhaps I should do this on the lower level?
            return true;
        }
      }
      for(let subQuestion of subQuestionObject){
        console.log("subQuestions are"+subQuestion);
      }
    } 
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    //build the formGroup.  For each one of the questionGroup,s
    //
    for (const group of this.questionGroup) {
      const controls = group.questions.reduce((acc, cur, index) => {
        //todo: make the below line type-safe
        this.answers = {...this.answers, [cur.id]: ''};
        return acc = {...acc, [cur.id]: this._formBuilder.control('', Validators.apply([...cur.validators]))};
      }, {});
      var currentQuestion = this.formGroups[this.formGroups.length - 1];
      this.formGroups = [
        ...this.formGroups,
        {
          group: this._formBuilder.group(controls),
          questions: group.questions,
          controls: controls,
          label: group.label,
          hidden: this.setHidden(currentQuestion)
        }];

        /*============
        Hide any elements set to hidden.  Use template logic to pull in the corresponding elements
        ============*/
        }
        /*
        for (let subQuestionObject of this.formGroups[this.formGroups.length - 1].questions){
          console.log("subQuestionObject is:"+ Object.getOwnPropertyNames(subQuestionObject))
          if (subQuestionObject.prototype.hasOwnProperty('hidden')){
            if (subQuestionObject.hidden === 'True'){
              //hide this object 
                //HOW???????
                //set an element on this as 

                //"unused label".  How do I assign this down?
                  //Do I pass it through nGX down to the next element through each 
                
                  //Perhaps I should do this on the lower level?
                question.hideElement: true
            }
          }
          for(let subQuestion of subQuestionObject){
            console.log("subQuestions are"+subQuestion);
          }
        }
        */    
    this.formsReady = true;
  }

  public snapshotModel() {
    console.log('modelChanged', this.formGroups[0].controls['Street'].value);
  }

}
