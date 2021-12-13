import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-exo1ligne]',
  templateUrl: './exo1ligne.component.html',
  styleUrls: ['./exo1ligne.component.css']
})
export class Exo1ligneComponent implements OnInit {

  @Input()id = "string";
  @Input()username = "string";
  @Input()mail = "string";

  constructor() {

    this.id = "1";
    this.username ="Patrick";
    this.mail="Patrick@gmail.com";


   }

  ngOnInit(): void {
  }

}
