import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarService } from '../services/car/car.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cars!: Car[];

  image: string;
  brand: string;
  model: string;
  isRented: boolean;
  constructor(private carService: CarService) {

    this.image ="";
    this.brand ="";
    this.model ="";
    this.isRented = true;

   }

  ngOnInit(): void {
  }

}
