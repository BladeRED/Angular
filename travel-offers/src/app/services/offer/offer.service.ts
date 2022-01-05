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
  offer!: Offer;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.baseUrl = environment.apiUrl;
  }

  findAll(): Promise<Offer[] | undefined> {

    return this.http
      .get<{offers: any[] }>(this.baseUrl + 'offers')
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

  findByID(idToSearch: string): Promise<Offer | undefined> {

    return this.http
    .get<{offer: any}>(this.baseUrl + '/offers/' + idToSearch)
    .pipe( map((data: {offer: any}) => Offer.fromJSON(data.offer)))
    .toPromise(); //


  }

  editOffer(editedOffer: Offer): Promise<void> {
    return this.http
    .post<void>(this.baseUrl + 'offers/edit' + editedOffer.id, editedOffer.toJSON())
    .toPromise()
  }

  save(offerToAdd: Offer) {

    return this.http
    .post<void>(this.baseUrl + 'offers/', offerToAdd.toJSON())
    .toPromise()


  }

  deleteByID(idToDelete: string): Promise<void> {

    return this.http
      .get<void>(this.baseUrl + '/offers/' + idToDelete)
      .toPromise();


  }

}
