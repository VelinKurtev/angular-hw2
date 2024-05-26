import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { Book, DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-rater',
  standalone: true,
  imports: [MatCardModule, RatingBarComponent, MatInputModule, FormsModule, MatFormFieldModule, CommonModule, StarRatingModule, MatIconModule, MatButtonModule],
  templateUrl: './book-rater.component.html',
  styleUrl: './book-rater.component.css'
})
export class BookRaterComponent {

  name!: string;
  description!: string;
  author!: string;
  editableName!: string;
  editableDescription!: string;
  editableAuthor!: string;
  rated: boolean = false;
  rating: number = 0;
  avgRating: number[] = [];
  totalRating!: number[];
  bookIndex = 0;
  done: boolean = false;

  books!: Book[];
  private booksSubscription: Subscription;

  constructor(private dataService: DataService) {
    this.booksSubscription = this.dataService.booksData$.subscribe(data => {
      this.books = data;
    });

    this.loadNextBook(this.bookIndex);
  }

  ngOnDestroy() {
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
    this.rated = true;
    this.editableName = this.name;
    this.editableDescription = this.description;
    this.editableAuthor = this.author;
    this.avgRating[this.bookIndex] = rating;
  }

  nextBook(reset?: boolean) {
    this.rating = 0;
    this.rated = false;
    if (reset) {
      this.bookIndex = -1;
      this.avgRating = [];
    }
    this.books[this.bookIndex] = { name: this.editableName, description: this.editableDescription, author: this.editableAuthor } as Book;
    this.bookIndex += 1;
    if (this.bookIndex < this.books.length) {
      this.loadNextBook(this.bookIndex);
    }
  }

  private loadNextBook(index: number) {
    this.name = this.books[index].name;
    this.description = this.books[index].description;
    this.author = this.books[index].author;
  }

  calculateAverage(arr: number[]) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return arr.length ? sum / arr.length : 0;
  }
}
