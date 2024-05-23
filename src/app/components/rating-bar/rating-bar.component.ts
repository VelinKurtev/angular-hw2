import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [MatSnackBarModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class RatingBarComponent implements OnInit {

  @Input('rating') rating: number = 0;
  @Output() private ratingUpdated = new EventEmitter();
  private starCount: number = 5;
  color = 'yellow';

  private snackBarDuration: number = 2000;
  ratingArr:number[] = [];

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
