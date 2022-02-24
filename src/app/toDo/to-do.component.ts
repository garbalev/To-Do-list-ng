import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo, ToDosService } from '../shared/to-dos.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  id: number;

  constructor(private activateRoute: ActivatedRoute, public toDosService: ToDosService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
      if (this.id != undefined) {
        this.toDo = this.toDosService.getToDo(this.id)
        console.log(this.toDo);

      }
  }

  @Input() toDo!: ToDo;
  @Input('index') toDoNumber!: number;
  @Input() disabledOrNot!: boolean;

  @Output() idToDelete = new EventEmitter<number>();
  @Output() disableAllButtonts = new EventEmitter<boolean>();

  editing: boolean = false;

  toggleEditing(): void {
    this.editing = !this.editing;
    this.disableAllButtonts.emit(!this.disabledOrNot);
    console.log(this.toDo.title);
  }

  complete(): void {
    this.toDo.completed = !this.toDo.completed;
    console.log(this.toDo);
  }

  deleteToDo() {
    this.idToDelete.emit(this.toDo.id);
  }
}
