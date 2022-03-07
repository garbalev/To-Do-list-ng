import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ToDosService } from '../shared/to-dos.service';

@Component({
  selector: 'app-all-to-dos',
  templateUrl: './all-to-dos.component.html',
  styleUrls: ['./all-to-dos.component.scss'],
})

export class AllToDosComponent implements OnInit, OnDestroy {

  loading: boolean = true;

  subscription:any

  constructor(public toDosService: ToDosService) {}

  ngOnInit(): void {
    this.subscription = this.toDosService
      .fetchToDos()
      .pipe(delay(300))
      .subscribe(() => {
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  disabledButtons: boolean = false;

  setDisabledButtons(disabledOrNot: boolean): void {
    this.disabledButtons = disabledOrNot;
  }
}
