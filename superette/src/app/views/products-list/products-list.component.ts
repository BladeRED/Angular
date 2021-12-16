import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  constructor(private productService : ProductService) {

   }

  ngOnInit(): void {

    this.products = this.productService.products;
  }

  changeDispo(arrayIndex: number):void {

    // on appelle la méthode dans le service.ts
    this.productService.changeDispoById(this.products[arrayIndex].id).then((product: Product) => {this.products[arrayIndex] = product;});
  };

  UpdateAllDispo(newDispo: boolean): void {

   // on appelle la méthode dans le service.ts
    this.productService.UpdateAllDispo(newDispo).then((products: Product[]) => {

      this.products = products;

    })
  }

  onClickDeleteProduct(arrayIndex: number): void{
    this.productService.deleteProduct(this.products[arrayIndex].id).then(() => {})



  }

}
