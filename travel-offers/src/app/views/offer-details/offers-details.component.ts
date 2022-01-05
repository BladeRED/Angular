import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer/offer.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersDetailsComponent implements OnInit {

  offer!: Offer;

  constructor(private route: ActivatedRoute, private offerService : OfferService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.offerService.findByID(id!)
    .then((offer : Offer | undefined) => {this.offer = offer!;})

  }

  getCreatorUsername(): string {

    return (this.offer.creatorId as User).username;

  }

}
