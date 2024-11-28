import { Book } from '../../book.service';

export interface ChangeTitleAction {
  payload: {
    newTitle: string;
  };
}

export interface BookSelector {
  book: Book;
}
