import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { GhUsersService } from '../shared/gh-users.service';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.scss'],
})
export class GitHubUsersComponent implements OnInit {
  public keyUpSubj$ = new Subject<any>();

  users$: any;

  users: any;

  constructor(public gitHubUsersService: GhUsersService) {}

  ngOnInit(): void {
    this.users$ = this.keyUpSubj$.pipe(
      debounceTime(750),
      distinctUntilChanged(),
      switchMap((val) => this.gitHubUsersService.getUsers(val)),
      map((response) => response.items),
      tap((el) => console.log(el))
    );
  }

  getInfo(event: any) {
    const value = event.target.value;
    this.keyUpSubj$.next(value);
  }
}
