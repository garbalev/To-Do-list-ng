import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToDoComponent } from './toDo/to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { TrueThenFalsePipe } from './true-then-false.pipe';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AddToDoComponent,
    TrueThenFalsePipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
