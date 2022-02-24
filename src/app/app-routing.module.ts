import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescriptionComponent } from './description/description.component';
import { ToDoComponent } from './toDo/to-do.component';

const routes: Routes = [
  { path: 'description', component: DescriptionComponent },
  { path: 'todos/:id', component: ToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
