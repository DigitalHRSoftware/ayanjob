import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ApplicationComponent }      from './application/application.component';
import { JobComponent }      from './jobs/jobs.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent,
    DashboardComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ApplicationComponent,
    JobComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
