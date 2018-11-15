import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule,
  MatSelectModule, MatStepperModule, MatDatepickerModule, DateAdapter, MatNativeDateModule, MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { StepFormInputComponent } from './stepper/step-form-input/step-form-input.component';
import { StepperComponent } from './stepper/stepper.component';

import { AppRoutingModule } from './app-routing.module';
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';

/*==========
Material Imports
==========*/

const material_modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [
    AppComponent,
    StepFormInputComponent,
    StepperComponent,
    AutocompleteInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [BrowserAnimationsModule],
    HttpClientModule,
    ...material_modules
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
