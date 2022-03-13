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
  toDos: ToDo[] = [
    // { id: 1311643546453, title: 'Buy milk', completed: false },
    // { id: 1321643547453, title: 'Buy almonds', completed: false },
    // { id: 1331643548453, title: 'Buy honey', completed: true },
    // { id: 1341643549453, title: 'Take a rest', completed: false },
    // { id: 1351643540453, title: 'Go for a walk', completed: true },
  ];

  constructor(private http: HttpClient) {}

  dataObservable!: Observable<any>;

  fetchToDos(): Observable<any> {
    if (this.dataObservable) {
      console.log('request has already been');
      return this.dataObservable;
    } else {
      this.dataObservable = this.http
        .get('https://jsonplaceholder.typicode.com/todos?_limit=7')
        .pipe(
          map((tasks: any) =>
            tasks.map(({ userId, ...rest }: { userId: any }) => rest)
          ),
          tap(() => console.log('outerStream')),
          concatMap((tasks) => {
            return timer(500,250).pipe(
              take(tasks.length),
              map((i) => tasks[i]),
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
