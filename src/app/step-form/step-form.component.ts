import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../wizard-form/Questions';

export interface StepFormQuestionGroup {

}

export interface StepFormQuestion {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  selectOptions?: string[];
}

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss']
})
export class StepFormComponent implements OnInit {
  @Input() questions: Question[];
  constructor() { }

  ngOnInit() {
  }

}
