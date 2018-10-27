import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})
export class WizardFormComponent implements OnInit {
	public name = '';

  constructor() { }

  ngOnInit() {
  }

  public onclick(){
  	console.log('Output'+this.name);
  }

}
