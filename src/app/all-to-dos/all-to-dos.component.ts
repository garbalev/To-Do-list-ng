import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { ToDosService } from '../shared/to-dos.service';

@Component({
  selector: 'app-all-to-dos',
  templateUrl: './all-to-dos.component.html',
  styleUrls: ['./all-to-dos.component.scss'],
})
export class AllToDosComponent implements OnInit, OnDestroy {
  loading: boolean = true;

  subscription: any;

  constructor(public toDosService: ToDosService) {}

  ngOnInit(): void {
    this.subscription = this.toDosService
      .fetchToDos()
      // .pipe(delay(1000))
      .subscribe(() => {
        this.loading = false;
        console.log('1');
      });


    of(1, 2, 3)
      .pipe(
        map(el => el*2)
      )
      .subscribe((el) => console.log(el));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  disabledButtons: boolean = false;

  setDisabledButtons(disabledOrNot: boolean): void {
    this.disabledButtons = disabledOrNot;
  }
}
