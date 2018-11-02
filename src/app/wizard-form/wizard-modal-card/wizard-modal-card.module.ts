import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardModalCardComponent } from './wizard-modal-card.component';


/*=============

==============*/
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';


import {mockViews} from '../question_views';


@NgModule({
  	imports: [MatStepperModule, CommonModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatFormFieldModule],
	exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatFormFieldModule],
  	declarations: [WizardModalCardComponent]
})

export class WizardModalCardModule {

	/*=============
	Variable declarations
	=============*/

	question_viewlist = mockViews;
		stepper_views = question_viewlist.question_views.viewList


	constructor(){

	}

	ngOnInit(){
		console.log("stepper_views receivd is:"+stepper_views);
	}


}