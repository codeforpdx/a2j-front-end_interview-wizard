import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardModalCardComponent } from './wizard-modal-card.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';


import mockViews from '../question_views';


@NgModule({
  	imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule],
	exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule],
  	declarations: [WizardModalCardComponent]
})

export class WizardModalCardModule {

	/*=============
	Variable declarations
	=============*/

	question_views = mockViews;


	constructor(){

	}

	ngOnInit(){

	}


}