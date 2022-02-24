import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

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

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  toDos: ToDo[] = toDosUniqueId;
  deleteToDo(id: number):void {
    this.toDos = this.toDos.filter((el) => el.id !== id);
  };
  addNewOne(toDo:ToDo):void {
    this.toDos.push(toDo)
  }
  constructor() { }
}
