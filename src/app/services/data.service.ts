import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

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
    { name: "To Kill a Mockingbird", description: "A novel about the serious issues of rape and racial inequality told through the eyes of young Scout Finch in the Deep South.", author: "Harper Lee" },
    { name: "1984", description: "A dystopian novel set in a totalitarian society under constant surveillance.", author: "George Orwell" },
    // { name: "Pride and Prejudice", description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.", author: "Jane Austen" },
    // { name: "The Great Gatsby", description: "A story about the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.", author: "F. Scott Fitzgerald" },
    // { name: "Moby-Dick", description: "A narrative of Captain Ahab's obsessive quest to kill the giant white whale, Moby-Dick.", author: "Herman Melville" },
    // { name: "War and Peace", description: "A historical novel that tells the story of five families during the Napoleonic wars.", author: "Leo Tolstoy" },
    // { name: "The Catcher in the Rye", description: "A novel about teenage rebellion and angst as narrated by the disenchanted Holden Caulfield.", author: "J.D. Salinger" },
    // { name: "The Hobbit", description: "A fantasy novel about the journey of Bilbo Baggins, who is swept into an epic quest to reclaim a lost kingdom.", author: "J.R.R. Tolkien" },
    // { name: "Brave New World", description: "A dystopian novel that explores the dangers of a technologically advanced future society.", author: "Aldous Huxley" },
    // { name: "Jane Eyre", description: "A novel about the experiences of the orphaned Jane Eyre, including her growth to adulthood and her love for Mr. Rochester.", author: "Charlotte Brontë" }
  ])

  constructor() { }

  updateBook(id: number, updatedBook: Book) {
    this.booksData$ = this.booksData$.pipe(
      map(books => {
        if (id !== -1) {
          books[id] = updatedBook;
        }
        return books;
      })
    );
  }
}
