import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[];

  constructor() {
    this.books = [];

    for (let i = 0; i < 11; i++) {
      this.books.push(
        new Book(i, 'Titre' + i, 'Description' + i, 'Auteur' + i, true)
      );
    }
  }

  //CRUD Create Read Update Delete

  addBook(bookToAdd: Book): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      bookToAdd.id = this.books[this.books.length - 1].id + 1;
      this.books.push(bookToAdd);
      resolve();
    });
  }

  editBook(editedBook: Book): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === editedBook.id) {
          this.books[index] = editedBook;
          resolve();
          break;
        }
      }
    });
  }

  getBookById(bookId: number): Promise<Book> {
    return new Promise<Book>((res, rej) => {
      for (let book of this.books) {
        if (book.id === bookId) {
          res(book);
          break;
        }
      }
    });
  }

  updateStatusForBookId(bookId: number): Promise<Book> {
    return new Promise<Book>((res, rej) => {
      for (let [index, book] of this.books.entries()) {
        if (book.id === bookId) {
          this.books[index].available = !this.books[index].available;
          res(this.books[index]);
          break;
        }
      }
    });
  }

  updateAllStatus(newStatus: boolean): Promise<Book[]> {
    return new Promise<Book[]>((res, rej) => {
      this.books.forEach((book) => (book.available = newStatus));
      res(this.books);
    });
  }
}
