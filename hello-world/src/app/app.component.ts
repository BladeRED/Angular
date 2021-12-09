import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  firstNameToInput: string;
  lastNameToInput: string;

  constructor(){

    this.firstNameToInput = "Quentin";
    this.lastNameToInput = "Déléguium";

  }
}
