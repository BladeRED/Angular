import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  book!: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.bookService.getBookById(+id).then((book: Book) => {
      this.book = book;
    });
  }

  onSubmitEditedBook(editedBook: Book): void {
    this.bookService.editBook(editedBook).then(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
