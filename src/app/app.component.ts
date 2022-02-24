import { Component, DoCheck, OnInit } from '@angular/core';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

console.log('abjsdbasjdbsadjadmbsaj');

const date = Number(Date.now().toString());
const toDosUniqueId = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Buy almonds', completed: false },
  { id: 3, title: 'Buy honey', completed: true },
  { id: 4, title: 'Take a rest', completed: false },
  { id: 5, title: 'Go for a walk', completed: true },
].map(toDo => {
  toDo.id = Math.floor(date * Math.random())
  return toDo;
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDos: ToDo[] = toDosUniqueId;

  disabledButtons:boolean = false;

  setDisabledButtons(disabledOrNot:boolean):void {
    this.disabledButtons = disabledOrNot;
  }

  deleteToDo(id: number):void {
    this.toDos = this.toDos.filter((el) => el.id !== id);
  }

  addNewOne(toDo:ToDo):void {
    this.toDos.push(toDo)
  }
}
