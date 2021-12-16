import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

form!: FormGroup;

book!: Book;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();
  }

  onSubmitBookForm(): void {

console.log(this.book)

  }

  private initForm(): void {

    this.book = new Book (0, '', '', '', false)


// Un formulaire st un groupe dans lequel on a des contrôles
//Un contrôle équivaut à un champ du formulaire
    this.form = this.fb.group({

      title: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(30)]],
      description: [null, [Validators.required, Validators.minLength(10),Validators.maxLength(250)]],
      author: [null, [Validators.required, Validators.minLength(5),Validators.maxLength(60)]],
      available: [null],




    })

  }

}
