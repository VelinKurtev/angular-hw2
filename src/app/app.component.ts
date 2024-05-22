import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookRaterComponent } from './components/book-rater/book-rater.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookRaterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw2';
}
