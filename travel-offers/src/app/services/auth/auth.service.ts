import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Try to log the user
   * @param email
   * @param password
   */
  signIn(email: string, password: string): Promise<User> {
    return this.http
    .post<User>(environment.apiUrl + 'login',{email, password})
    .toPromise()
  }

  /**
   * Log out the user
   */
  signOut(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res(); // Success
      }
    );
  }
}
