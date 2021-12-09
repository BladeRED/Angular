import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  maVille: string;
  buttonDisabled: boolean;

  constructor() {

  this.maVille ="Murol";
  this.buttonDisabled = false;
   }

  ngOnInit(): void {



  };
  // Change de ville au clic //
  changeVille(): void {

    this.maVille = "Tokyo"
    this.buttonDisabled = true;

  }
}
