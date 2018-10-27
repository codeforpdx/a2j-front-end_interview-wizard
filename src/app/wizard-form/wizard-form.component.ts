import { Component, OnInit } from '@angular/core';
import { questions } from './Questions.js'


@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})


export class WizardFormComponent implements OnInit {
	/*=========
  Type declarations
  =========*/



interface Question {
    formId: string;
    questionId: string;
    question: string;
    type: textarea | text | password | select | radio | date;
    answerType: string | number | date | //...;
    answers: answerType[];  //an array of answerTypes
    controls : {
        validationControls: email | password| date | locked //....other validators
        submitHandler : onSubmit()
    };
    questionUpdatedOn: Date;
    answeredOn: Date
}

  public name = '';


  public address = {

  }

  verifyAnswers(answers){
    //check if any answers are missing

      //if any are missing and are required 

  }

  constructor() {

    /*
    this.questions = {
      first_name: "foo",
      last_name: "bar"
    } */

  }


  ngOnInit() {

    //var questions = new Question;
    var questions = ["foo", "bar"]

  }

  public onclick(){
  	console.log('Output'+this.name);
  }

}



