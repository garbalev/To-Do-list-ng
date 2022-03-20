import { Component, OnInit } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
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

  constructor(public gitHubUsersService: GhUsersService) {}

  ngOnInit(): void {
    this.users$ = this.keyUpSubj$.pipe(
      debounceTime(750),
      distinctUntilChanged(),
      filter((val) => val.trim()),
      switchMap((val:string) =>
        this.gitHubUsersService.getUsers(val)
      ),
      map((response) => response.items),
      tap((el) => console.log(el))
    );
  }

  getInfo(event: any) {
    const value = event.target.value;
    this.keyUpSubj$.next(value);
  }
}
