import { Component, DoCheck, OnInit } from '@angular/core';
import { ToDosService } from './shared/to-dos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public toDosService: ToDosService) {}

  disabledButtons: boolean = false;

  setDisabledButtons(disabledOrNot: boolean): void {
    this.disabledButtons = disabledOrNot;
  }
}
