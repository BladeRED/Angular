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

  constructor(private carService: CarService) {



   }

  ngOnInit(): void {

    this.cars = this.carService.cars;
  }

}
