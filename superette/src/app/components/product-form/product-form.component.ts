import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<Product>;
  @Input() buttonLabel!: string;
  @Input() productToEdit!: Product;

  form!: FormGroup;

  product!: Product;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitProductForm(): void {
    this.formSubmitted.emit(this.product);
  }

  private initForm(): void {
    this.product = this.productToEdit
      ? this.productToEdit
      : new Product(0, '', false);

    // Un formulaire est un groupe dans lequel on a des contrôles
    //Un contrôle équivaut à un champ du formulaire
    this.form = this.fb.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      status: [null],
    });
  }
}
