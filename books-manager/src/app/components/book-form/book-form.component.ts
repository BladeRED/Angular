import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {

  @Output() formSubmitted : EventEmitter<Book>;
  @Input() buttonLabel!: string;
  @Input()bookToEdit!: Book;

  form!: FormGroup;

  book!: Book;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Book>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitBookForm(): void {
    this.formSubmitted.emit(this.book);
  }

  private initForm(): void {
    this.book = this.bookToEdit ? this.bookToEdit :new Book(0, '', '', '', false);

    // Un formulaire est un groupe dans lequel on a des contrôles
    //Un contrôle équivaut à un champ du formulaire
    this.form = this.fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250),
        ],
      ],
      author: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      ],
      available: [null],
    });
  }
}
