import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offer } from '../../models/offer.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  baseUrl: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.baseUrl = environment.apiUrl;
  }

  findAll(): Promise<Offer[] | undefined> {
    const token = this.authService.token.getValue();
    const headers = new HttpHeaders().append('Authorization', token);

    return this.http
      .get<{offers: any[] }>(this.baseUrl + 'offers', {headers})
      .pipe(
        map((data: {offers: any[] }) => {

          const tmp: Offer[] = [];

          data.offers.forEach(offerAsJSON => {
            const offer = Offer.fromJSON(offerAsJSON);
            tmp.push(offer);
          });

          return tmp as Offer[];

          // return data.map(offerAsJSON => Offer.fromJSON(offerAsJSON));

          // le map est un foreach qui renvoie un nouveau tableau.
          // Chaque opération du foreach est automatiquement ajouté dans un tableau invisible et c'est ce tableau
          // qui est renvoyé
        })
      )
      .toPromise(); // Va renvoyer une erreur si il y en a une et les données typées au bon format dans l'autre cas
  }
}
