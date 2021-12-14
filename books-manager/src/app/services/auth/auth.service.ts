import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: string;
  constructor() {}

  signin(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (email === 'juleray@msn.com' && password === 'azerty') {
        this.token = 'wingardiumleviosa';
        resolve()
      }
    });
  }
}
