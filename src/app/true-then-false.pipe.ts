import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './shared/to-dos.service';

@Pipe({
  name: 'trueThenFalsePipe',
  pure: false
})

export class TrueThenFalsePipe implements PipeTransform {

  transform(allTodos: ToDo[]): ToDo[] {
    return allTodos.sort(toDo => toDo.completed ? -1 : 1)
  }

}
