import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  firstNameToInput: string;
  lastNameToInput: string;
  age: number;
  users: any[];

  constructor() {
    this.users = [];
    const userOne = {
      firstName: 'Raymond',
      lastName: 'Boris',
      age: 25,
    };
    this.users.push(userOne);

    const userTwo = {
      firstName: 'Patricia',
      lastName: 'Malaga',
      age: 56,
    };
    this.users.push(userTwo);

    this.firstNameToInput = 'Quentin';
    this.lastNameToInput = 'Déléguium';
    this.age = 45;
  }

  onClickShowAge(age: number) {
    alert(this.age);
  }

  onClickAddUser(): void {
    this.users.push({
      firstName: 'Toto',
      lastName: 'Tutu',
      age: 65,
    });
  }

  generateStyles(index: number): any {
    const styles = {
      color: 'blue',
      textTransform: '',
    };

    if (index % 2 !== 0) {
      styles.color = 'red';
    } else {
      styles.textTransform = 'uppercase';
    }

    return styles;
  }
}
