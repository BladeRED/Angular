import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
  styleUrls: ['./animaux.component.css']
})
export class AnimauxComponent implements OnInit {

  animal: string;

  constructor() {


this.animal = "wafwaf";

   }

  ngOnInit(): void {


  }

  criAnimal(){

    alert(this.animal);

      }

}
