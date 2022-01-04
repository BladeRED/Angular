import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

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
   signIn(email: string, password: string): Promise<void> {
    return this.http

      // Envoyer une requête à l'API et recevoir des données au format JSON sous forme d'un observable
      .post<{user: any; token: string}>(environment.apiUrl + 'login', {email, password})

      // {
      //     token: 'aeadqsfsgqsgqsgdgfdsgdsgsdgfqsg',
      //     user: {
      //        _id: 'azeaeazea',
      //        username: 'ThomasC',
      //        firstname: 'Thomas',
      //        lastname: 'CHEVALIER',
      //        email: 'contact@thomaschevalier.fr',
      //        createdAt: '04/01/2022',
      //        updatedAt: '04/01/2022',
      //      }
      // }

      // Le pipe et le map permettent d'interferer et transformer la donnée reçue avant de la donner au composant
      .pipe(
        map((data: {user: any; token: string}) => {
          data.user = User.fromJSON(data.user);
          return data;
        })
      )

      // {
      //     token: 'aeadqsfsgqsgqsgdgfdsgdsgsdgfqsg',
      //     user: {
      //        _id: 'azeaeazea',
      //        _username: 'ThomasC',
      //        _firstname: 'Thomas',
      //        _lastname: 'CHEVALIER',
      //        _email: 'contact@thomaschevalier.fr',
      //        _createdAt: '04/01/2022',
      //        _updatedAt: '04/01/2022',
      //        id: fct(),
      //        username: fct(),
      //        firstname: fct(),
      //        lastname: fct(),
      //        email: fct(),
      //        createdAt: fct(),
      //        updatedAt: fct(),
      //      }
      // }

      // Permet de transformer un observable en promesse pour plus de facilité d'utilisation
      .toPromise()

      // Cas particulier pour le signIn où l'on doit assigner la valeur du jeton dans l'observable
      // On le fait car on doit garder la logique côté service et non côté composant
      .then((res:{user: User; token: string} | undefined)  => {
        // On assigne le jeton récupéré dans l'observable
        // Le ! permet de dire que res n'est pas undefined puisqu'on a mis au dessus qu'il pouvait être
        // undefined à cause de VSC
        this.token.next(res!.token);
      });
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
