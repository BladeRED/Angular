import { Injectable } from '@angular/core';
import { Car } from '../../models/Car'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars:Car[]

  constructor() {

    this.cars = []
    for (let i = 1;i <7;i++){

      this.cars.push(new Car('car'+ i, 'brand' + i, 'model' + i, true))


    }
   }
}
