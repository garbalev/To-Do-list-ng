import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Subject, tap } from 'rxjs';
import { GhUsersService } from '../shared/gh-users.service';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.scss'],
})
export class GitHubUsersComponent implements OnInit {
  private keyUpSubj = new Subject<any>();

  users$: any;

  constructor(public gitHubUsersService: GhUsersService) {}

  ngOnInit(): void {
    this.keyUpSubj
      .pipe(debounceTime(750), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        this.users$ = this.gitHubUsersService.getUsers(value).pipe(
          map((el) => el.items),
          tap((el) => {
            console.log(el);
          })
        );
      });
  }

  getInfo(event: any) {
    const value = event.target.value;
    this.keyUpSubj.next(value);
  }
}
