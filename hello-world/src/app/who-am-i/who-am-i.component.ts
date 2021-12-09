import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() {

    this.firstName = "Julien";
    this.lastName = "RAYNAUD";

  }

  ngOnInit(): void {
  }

}
