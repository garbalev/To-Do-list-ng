import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concatMap,
  interval,
  map,
  mergeAll,
  mergeMap,
  Observable,
  publishReplay,
  refCount,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  toDos!: ToDo[]

  constructor(private http: HttpClient) {}

  dataObservable!: Observable<any>;

  fetchToDos(): Observable<any> {
    if (this.dataObservable) {
      console.log('The request has already been');
      return this.dataObservable;
    } else {
      this.dataObservable = this.http
        .get('https://jsonplaceholder.typicode.com/todos?_limit=7')
        .pipe(
          map((tasks: any) =>
            tasks.map(({ userId, ...rest }: { userId: any }) => rest)
          ),
          tap(() => console.log('outerStream')),
          switchMap((tasks) => {
            return timer(500,250).pipe(
              take(tasks.length),
              map((i: number) => tasks[i]),
              tap((res) => {
                this.toDos.push(res);
                console.log('innerStream');
              })
            );
          }),
          publishReplay(),
          refCount()
        );
      return this.dataObservable;
    }
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
