import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { Book, DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-rater',
  standalone: true,
  imports: [MatCardModule, RatingBarComponent, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './book-rater.component.html',
  styleUrl: './book-rater.component.css'
})
export class BookRaterComponent {

  name:string;
  description:string;
  author:string;

  books!: Book[];
  private booksSubscription: Subscription;
  
  constructor(private dataService: DataService) {
    this.booksSubscription = this.dataService.booksData$.subscribe(data => {
      this.books = data;
    });

    this.name = this.books[0].name;
    this.description = this.books[0].description;
    this.author = this.books[0].author;
  }

  ngOnDestroy() {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }
}
