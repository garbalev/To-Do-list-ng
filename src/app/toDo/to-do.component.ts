import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})

export class ToDoComponent implements OnInit {
  toDos = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Cope with anxiety', completed: false },
    { id: 3, title: 'Land an internship', completed: true },
  ];

  disabled = false;

  changeTitle(): void {
    this.toDos = []
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = true
    }, 2000)
  }
}
