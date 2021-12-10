import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-ligne]',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {

  @Input()ID : string;
  @Input()userName:string;
  @Input()Mail:string;

  constructor() {

    this.ID = '';
    this.userName = '';
    this.Mail= '';

   }

  ngOnInit(): void {
  }

}
