import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Book = {
  name: string,
  description: string,
  author: string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  booksData$: Observable<Book[]> = of([
    { name: "Test", description: "TestDescription", author: "TestAuthor" }
  ])

  constructor() { }

  updateBook(id: number, Book: Book) {
    // add update book functionality
  }
}
