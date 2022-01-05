import { Component, OnInit } from '@angular/core';
import {OfferService} from '../../services/offer/offer.service';
import {Offer} from '../../models/offer.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-new',
  templateUrl: './offer-new.component.html',
  styleUrls: ['./offer-new.component.css']
})
export class OfferNewComponent implements OnInit {

  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewOffer(newOffer: Offer): void {
    this.offerService
    .save(newOffer)
    .then(() => {this.router.navigateByUrl('offers')})
    .catch(err => console.error(err));
  }

}
