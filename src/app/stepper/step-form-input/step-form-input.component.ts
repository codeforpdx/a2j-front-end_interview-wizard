import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/*==============
Angular Material imports
==============*/

import {STATE_LIST} from '../../FakeData/state_list';


export type StepFormInputType = 'text' | 'textarea' | 'date' | 'number' | 'select' | 'autoComplete';

@Component({
  selector: 'app-step-form-input',
  templateUrl: './step-form-input.component.html',
  styleUrls: ['./step-form-input.component.scss']
})
export class StepFormInputComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() id: string | number;
  @Input() label: string;
  @Input() inputType: StepFormInputType;
  @Input() selectOptions: string[]; // Only needed if type is select.
  @Input() formControl: FormControl;
  @Input() placeholder: string;

  @Input() state_list: string[];

  @Input() hideElement: boolean;


  ngOnInit() {
    console.log('this:', this.id);
  }

}
