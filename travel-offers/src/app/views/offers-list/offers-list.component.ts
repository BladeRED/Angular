import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { OfferService } from 'src/app/services/offer/offer.service';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css'],
})
export class OffersListComponent implements OnInit {
  offers!: Offer[];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.findAll().then((offers: Offer[] | undefined) => {
      this.offers = offers!;
    });
  }

  getCreatorUsername(offer: Offer): string {
    return (offer.creatorId as User).username;
  }

  onClickDeleteOffer(idToDelete: string): void {
    this.offerService
      .deleteByID(idToDelete)
      .then(() => {
        for (let [index, offer] of this.offers.entries()) {
          if (offer.id === idToDelete) {
            this.offers.splice(index, 1);
            break;
          }
        }
      })
      .catch((err) => console.error(err));
  }
}
