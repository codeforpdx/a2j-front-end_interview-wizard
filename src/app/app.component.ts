import { Component } from '@angular/core';

//The "question set"
import { FAKE_STEP_QUESTIONS } from './FakeData/fake-questions-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	questionSet = FAKE_STEP_QUESTIONS;
  title = 'the Family Law Document Preparation Wizard';
}
