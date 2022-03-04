import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './toDo/to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { TrueThenFalsePipe } from './true-then-false.pipe';
import { DescriptionComponent } from './description/description.component';
import { AllToDosComponent } from './all-to-dos/all-to-dos.component';
import { SingleToDoComponent } from './single-to-do/single-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AddToDoComponent,
    TrueThenFalsePipe,
    DescriptionComponent,
    AllToDosComponent,
    SingleToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
