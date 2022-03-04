import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ToDosService } from '../shared/to-dos.service';

@Component({
  selector: 'app-all-to-dos',
  templateUrl: './all-to-dos.component.html',
  styleUrls: ['./all-to-dos.component.scss'],
})
export class AllToDosComponent implements OnInit {
  loading: boolean = true;

  constructor(public toDosService: ToDosService) {}

  ngOnInit(): void {
    this.toDosService.fetchToDos()
    .pipe(delay(500))
    .subscribe(() => {
      this.loading = false;
      console.log(this.toDosService.toDos);
    });
  }

  disabledButtons: boolean = false;

  setDisabledButtons(disabledOrNot: boolean): void {
    this.disabledButtons = disabledOrNot;
  }
}
