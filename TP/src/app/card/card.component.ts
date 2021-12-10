import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titre : string;
  @Input() sousTitre : string;
  @Input() texte : string;
  @Input() lien : string;

  constructor() {

    this.titre = "";
    this.sousTitre = "";
    this.texte = ""
    this.lien =""


  }

  ngOnInit(): void {
  }

}
