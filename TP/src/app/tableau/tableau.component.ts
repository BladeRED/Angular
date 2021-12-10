import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  users: Array<any>;

  constructor() {

    this.users = [];
    this.users.push(
      { ID: '1',
        userName: 'John Doe',
        Mail: 'john@doe.com'

      }
    )

    this.users.push(
      { ID: '2',
        userName: 'Jean Dot',
        Mail: 'jean@dot.com'

      }
    )

    this.users.push(
      { ID: '3',
        userName: '¨Pierre Doe',
        Mail: 'pierre@doe.com'

      }
    )
   }

  ngOnInit(): void {
  }

}
