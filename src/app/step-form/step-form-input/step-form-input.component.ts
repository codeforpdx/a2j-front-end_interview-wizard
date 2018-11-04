import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type StepFormInputType = 'text' | 'textarea' | 'select';

@Component({
  selector: 'app-step-form-input',
  templateUrl: './step-form-input.component.html',
  styleUrls: ['./step-form-input.component.scss']
})
export class StepFormInputComponent implements OnInit {
  @Input() label: string;
  @Input() inputType: StepFormInputType;
  @Input() selectOptions: string[]; // Only needed if type is select.
  @Input() model: string;
  @Input() placeholder = ''; // Added a default value so input can be optional.
  @Output() modelChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onValueChange(): void {
    this.modelChanged.emit(this.model);
  }
}
