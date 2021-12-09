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
  age: number;

  constructor(){

    this.firstNameToInput = "Quentin";
    this.lastNameToInput = "Déléguium";
    this.age = 45;

  }

  onClickShowAge(){

    alert(this.age);

  }
}
