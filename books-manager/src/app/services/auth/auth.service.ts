import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token!: BehaviorSubject<string>;
  constructor() {

this.token = new BehaviorSubject<string>('')


  }

  signin(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (email === 'juleray@msn.com' && password === 'azerty') {
        this.token.next('wingardiumleviosa');
        resolve()
      }else{reject('Nananère, Anouchka!')}
    });
  }

  signOut(): Promise<void> {

return new Promise<void>((resolve, reject) => {this.token.next('')
resolve()})

  }
}
