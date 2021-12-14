import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  constructor() {
    this.products = [];

    for (let i = 0; i < 15; i++) {
      this.products.push(new Product(i, 'Name' + i, true));
    }
  }

  changeDispoById(productId: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === productId) {
          this.products[index].status = !this.products[index].status;
          resolve(this.products[index]);
          break;
        }


      }
    });
  }

  UpdateAllDispo(newDispo: boolean): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      this.products.forEach((product) => (product.status = newDispo));
      resolve(this.products);
    });
  }
}
