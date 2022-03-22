import { Component, OnDestroy, OnInit } from '@angular/core';
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
    this.subscription = this.toDosService.fetchToDos().subscribe(
      () => {
        this.loading = false;
        console.log('subscribed');
      },
      (err) => console.log('Error occurred')
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  disabledButtons: boolean = false;

  setDisabledButtons(disabledOrNot: boolean): void {
    this.disabledButtons = disabledOrNot;
  }
}
