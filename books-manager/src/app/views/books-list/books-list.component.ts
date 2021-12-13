import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books!: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.books;
  }
}
