import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  pages: number;
  price: number;
  edition: number;
}

export interface BookTitleChangePayload {
  newTitle: string;
}

export interface BookAction {
  type: string;
  payload: BookTitleChangePayload;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookSubject = new BehaviorSubject<Book>({
    id: 12,
    title: 'Angular Development',
    pages: 560,
    price: 800,
    edition: 18,
  });

  book$ = this.bookSubject.asObservable();

  dispatch(action: BookAction): void {
    this.bookSubject.next(this.reducer(this.bookSubject.value, action));
  }

  private reducer(currentState: Book, action: BookAction): Book {
    //  make a clone of the currentState
    const newState = { ...currentState };

    //  apply the change on the clone
    newState.title = action.payload.newTitle;

    //  return the clone
    return newState;
  }
}
