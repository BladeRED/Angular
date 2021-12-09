import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  @Input()firstName: string;
  @Input()lastName: string;

  isDisabled: boolean;
  isChecked: boolean;

  constructor() {

    this.firstName = "Julien";
    this.lastName = "RAYNAUD";
    this.isDisabled = false;
    this.isChecked = false;
  }

  ngOnInit(): void {

    setTimeout(() => {

      this.firstName = "Robert";
      this.lastName = "Dubonvin";
      this.isDisabled = true;
      this.isChecked = true;
    }, 2000);

    setTimeout(() => {

      this.firstName = "Julien";
      this.lastName = "RAYNAUD";
      this.isDisabled = false;
      this.isChecked = false;
    }, 4000);
  }

  onClickShowAge(age: number): void {

    alert(age);

  }

}
