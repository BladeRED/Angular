import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  book!: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const id = this.route.snapshot.params['id'] ; //:id

    this.bookService.getBookById(+id).then((book: Book) => {

      this.book = book;
    })
  }

}
