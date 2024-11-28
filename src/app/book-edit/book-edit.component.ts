import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTitleActionCreator } from '../features/book/book.feature';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  private store = inject(Store);

  handleClick() {
    this.store.dispatch(
      changeTitleActionCreator({
        payload: {
          newTitle: 'Spring Boot Microservices',
        },
      })
    );
  }
}
