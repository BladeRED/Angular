import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitNewProduct(productToAdd: Product): void {
    this.productService.addProduct(productToAdd).then(() => {
      this.router.navigateByUrl('/products');
    });
  }
}
