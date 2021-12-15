import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //recup de l'ID
    const id = this.route.snapshot.params['id']; //car :id dans app-routing renvoit un string


    this.productService.getProductById(+id)
    .then((product: Product) => {this.product = product;})
  }

}
