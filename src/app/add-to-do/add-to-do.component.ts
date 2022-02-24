import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../shared/to-dos.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent {

  @Input() disabledOrNot!: boolean;
  @Output() addToDo = new EventEmitter<ToDo>();

  inputValue: string = '';

  submit(): void {
    if (this.inputValue.trim().length) {
      const date: number = Number(Date.now().toString());
      const newToDo: ToDo = {
        id: Math.floor(date * Math.random()),
        title: this.inputValue,
        completed: false,
      };
      this.addToDo.emit(newToDo)
      console.log(newToDo);
      this.inputValue = '';
    }
  }
}
