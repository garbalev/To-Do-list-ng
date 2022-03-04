import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDo, ToDosService } from '../shared/to-dos.service';

@Component({
  selector: 'app-single-to-do',
  templateUrl: './single-to-do.component.html',
  styleUrls: ['./single-to-do.component.scss'],
})
export class SingleToDoComponent implements OnInit {
  id: number;

  toDo!: ToDo;

  constructor(private activatedRoute: ActivatedRoute, private toDosService: ToDosService) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.toDo = this.toDosService.getToDo(this.id);
    console.log(this.toDo);
  }
}
