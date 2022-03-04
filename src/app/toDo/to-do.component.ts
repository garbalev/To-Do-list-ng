import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../shared/to-dos.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  @Input() toDo!: ToDo;
  @Input('index') toDoNumber!: number;
  @Input() disabledOrNot!: boolean;

  @Output() idToDelete = new EventEmitter<number>();
  @Output() disableAllButtonts = new EventEmitter<boolean>();

  editing: boolean = false;

  toggleEditing(): void {
    this.editing = !this.editing;
    this.disableAllButtonts.emit(!this.disabledOrNot);
  }

  complete(): void {
    this.toDo.completed = !this.toDo.completed;
  }

  deleteToDo() {
    this.idToDelete.emit(this.toDo.id);
  }

  ngOnInit(): void {}
}
