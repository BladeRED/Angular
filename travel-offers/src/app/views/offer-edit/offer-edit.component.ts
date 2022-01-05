import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferService} from '../../services/offer/offer.service';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  offer!: Offer;

  constructor(private route: ActivatedRoute, private router: Router,
              private offerService: OfferService) {
  }

  ngOnInit(): void {
    // Récupérer l'id dans l'url + récupérer l'offre qui correspond
    // Depuis le HTML, il faudra l'envoyer vers le composant form
    const id = this.route.snapshot.paramMap.get('id');

    this.offerService
      .findByID(id!)
      .then((offer: Offer | undefined) => this.offer = offer!)
      .catch(err => console.error(err));
  }

  editOffer(offerEdited: Offer): void {
    // Écouter sur l'output pour envoyer via l'API l'update de l'offre
    this.offerService
      .editOffer(offerEdited)
      .then(() => this.router.navigateByUrl('offers'))
      .catch(err => console.error(err));
  }

}
