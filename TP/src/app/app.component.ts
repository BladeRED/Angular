import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP';
  titreToInput : string;
  sousTitreToInput : string;
  texteToInput : string;
  lienToInput : string;
  compteurToInput: number;
  firstName : string;

  constructor(){

    this.titreToInput = "Le Tonnerre du Cul";
    this.sousTitreToInput = "Dans la Vallée des Prout";
    this.texteToInput = "Il était une fois un petit chat sans poil qui s'appelait Poulet..."
    this.lienToInput ="grosseArnaque.com"
    this.compteurToInput= 3;
    this.firstName = "Julien Raynaud"

  }

  augmenteCompteur(){

    this.compteurToInput++;

  }

  diminueCompteur(){

    this.compteurToInput--;

  }

  changeNom(){

    this.firstName = "Martin Dupont";

  }
}
