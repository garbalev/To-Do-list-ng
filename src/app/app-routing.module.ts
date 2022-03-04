import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllToDosComponent } from './all-to-dos/all-to-dos.component';
import { DescriptionComponent } from './description/description.component';
import { SingleToDoComponent } from './single-to-do/single-to-do.component';

const routes: Routes = [
  { path: 'description', component: DescriptionComponent },
  { path: 'todos', component: AllToDosComponent },
  { path: 'todos/:id', component: SingleToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
