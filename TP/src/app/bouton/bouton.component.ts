import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {

  compteur: number;
  @Input()labelButton: string;
  @Output()ClickedButton: EventEmitter<void>;

  constructor() {

    this.compteur = 0;
    this.ClickedButton = new EventEmitter<void>();
    this.labelButton = "";

   }

  ngOnInit(): void {
  }
  auClicBouton(): void {

    this.ClickedButton.emit();

  }
}
