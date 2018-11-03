import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatStepperModule } from '@angular/material';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardFormComponent } from './wizard-form/wizard-form.component';
import { WizardModalCardComponent } from './wizard-form/wizard-modal-card/wizard-modal-card.component';
import { UserDocumentsListComponent } from './user-documents-list/user-documents-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
/*==========
Material Imports
==========*/

import {} from '@angular/material/stepper';

const material_modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
    AppComponent,
    WizardFormComponent,
    UserDocumentsListComponent,
    WizardModalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [BrowserAnimationsModule],
    ...material_modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
