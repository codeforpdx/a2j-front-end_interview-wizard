import { Component, OnInit } from '@angular/core';
import { Question, ExampleQuestion } from './Questions.js'


//TODO: Replace the below import with what we get from a database

import { questions } from './mockQuestions';


@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})


export class WizardFormComponent implements OnInit {
	/*=========
  Type declarations
  =========*/

   public textarea: string;
   public text: string;
   public password: string;
   public select: string;
   public radio: boolean;
   public date: Date;


  /*============
   Component model declarations
  ============*/    

   questions_list = questions;

  public name = '';


  public address = {

  }


  pullQuestionsFromDataSource(){
    //TODO: for each 
  }


  verifyLitigationType(response_type){

  }

  retrieveQuestions(){
    //For each question in litigation type: 
      //
  }

  verifyAnswers(answers){
    //check if any answers are missing

      //if any are missing and are required 

  }

  constructor() {
    
  }


  ngOnInit() {
    //fetch question Data from model 

  }

  public submitForm(){
  	console.log('Output'+this.name);

    //TODO: document.getelementByID
    //TODO: Verify it's working and then call the submit form function (or the "pullQuestionsFromDataSource" function???)

  }

}



