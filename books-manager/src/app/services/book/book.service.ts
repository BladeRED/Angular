import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any[];


  constructor() {

    this.books = [];

    const book = {

      id: '1',
      title: 'toto',
      description:'tata',
      author:'titi'
    }


   }
}
