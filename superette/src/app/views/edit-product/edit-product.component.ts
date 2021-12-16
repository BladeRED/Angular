import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.productService.getProductById(+id).then((product: Product) => {
      this.product = product;
    });
  }

  onSubmitEditedProduct(editedProduct: Product): void {
    this.productService.editProduct(editedProduct).then(() => {
      this.router.navigateByUrl('/products');
    });
  }
}
