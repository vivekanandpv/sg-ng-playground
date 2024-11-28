import { Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { bookSelector } from '../features/book/book.feature';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [NgIf, AsyncPipe, CurrencyPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  private store = inject(Store);

  book$ = this.store.select(bookSelector);
}
