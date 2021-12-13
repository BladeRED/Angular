import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  users : Array<any>;

  constructor() {

    this.users = [
      {id : "1",
      username : "Robert",
      mail: "Robert@gmail.com"
      },

      {id : "2",
      username : "Patate",
      mail: "Patate@gmail.com"
      },

      {id : "3",
      username : "Julien",
      mail: "Julien@gmail.com"
      },




    ];


   }

  ngOnInit(): void {
  }

}
