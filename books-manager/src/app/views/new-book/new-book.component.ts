import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitNewBook(bookToAdd: Book): void {


this.bookService.addBook(bookToAdd).then(() => {this.router.navigateByUrl('/books')})


  }


}
