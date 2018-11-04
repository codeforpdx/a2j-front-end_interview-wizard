import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';

import { mockViews } from '../question_views';

@Component({
  selector: 'app-wizard-modal-card',
  templateUrl: './wizard-modal-card.component.html',
  styleUrls: ['./wizard-modal-card.component.scss']
})
export class WizardModalCardComponent implements OnInit {

	/*=============
	Variable declarations
	=============*/

	public question_viewlist = mockViews;
	public stepper_views = this.question_viewlist.question_views.viewList;

	

	public question_formGroup : FormGroup = new FormGroup({});

	constructor(){
		console.log("component constructed!");
	}

	ngOnInit(){

		console.log("component started!");

		console.log("stepper_views recieved is:"+this.stepper_views);
	}


}
