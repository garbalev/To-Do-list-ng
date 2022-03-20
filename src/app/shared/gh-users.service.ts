import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GhUsersService {
  constructor(private http: HttpClient) {}

  getUsers(user: string): Observable<any> {
    console.log(user);
    return this.http.get(`https://api.github.com/search/users?q=${user}`);
  }
}
