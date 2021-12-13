import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[];


  constructor() {

    this.books = [];

      for (let i = 0; i < 11; i++){

        this.books.push(new Book(i, 'Titre' + i, 'Description' + i, 'Auteur' + i,true))

      }
   }
}
