import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() label: string;
  @Input() inputType: StepFormInputType;
  @Input() selectOptions: string[]; // Only needed if type is select.
  @Input() model: any;
  @Input() placeholder: string;
  @Output() modelChanges: EventEmitter<AnswerEvent> = new EventEmitter<AnswerEvent>();
  public formControl = new FormControl(this.model);

  constructor() { }

  ngOnInit() {
  }

  public onValueChange(): void {
    this.modelChanges.emit(this.formControl.value);
  }
}
