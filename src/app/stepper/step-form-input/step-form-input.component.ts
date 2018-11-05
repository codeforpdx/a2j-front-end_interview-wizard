import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export type StepFormInputType = 'text' | 'textarea' | 'date' | 'number' | 'select';

export interface AnswerEvent {
  id: string | number;
  value: string | number | Date;
}

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
  @Output() modelChanges: EventEmitter<AnswerEvent> = new EventEmitter<AnswerEvent>();

  constructor() { }

  ngOnInit() {
  }

  public onValueChange(): void {
    console.log(this.id, this.formControl);
    this.modelChanges.emit({
      id: this.id,
      value: this.formControl.value
    });
  }
}
