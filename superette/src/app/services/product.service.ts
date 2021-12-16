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

  //CRUD Create Read Update Delete

  addProduct(productToAdd: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      productToAdd.id = this.products[this.products.length - 1].id + 1;
      this.products.push(productToAdd);
      resolve();
    });
  }

  editProduct(editedProduct: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === editedProduct.id) {
          this.products[index] = editedProduct;
          resolve();
          break;
        }
      }
    });
  }

  deleteProduct(productIdToDelete: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, product] of this.products.entries()) {
        if (product.id === productIdToDelete) {
          this.products.splice(index, 1);
          resolve();
          break;
        }
      }
    });
  }

  getProductById(productId: number): Promise<Product> {
    return new Promise<Product>((res, rej) => {
      for (let product of this.products) {
        if (product.id === productId) {
          res(product);
          break;
        }
      }
    });
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
