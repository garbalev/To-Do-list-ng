import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  toDos: ToDo[] = [
    { id: 1311643546453, title: 'Buy milk', completed: false },
    { id: 1321643547453, title: 'Buy almonds', completed: false },
    { id: 1331643548453, title: 'Buy honey', completed: true },
    { id: 1341643549453, title: 'Take a rest', completed: false },
    { id: 1351643540453, title: 'Go for a walk', completed: true },
  ];

  constructor(private http: HttpClient) {}

  fetchToDos(): Observable<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(
        map((tasks: any) => tasks.map(({userId, ...rest}:{userId:any}) => rest)),
        tap((tasks: any) => this.toDos.push(...tasks))
      );
  }
  deleteToDo(id: number): void {
    console.log(id);
    this.toDos = this.toDos.filter((el) => el.id !== id);
  }
  addNewOne(toDo: ToDo): void {
    this.toDos.push(toDo);
  }
  getToDo(id: number): ToDo {
    const data = this.toDos.filter((el) => el.id == id);
    return data[0];
  }


}
