import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { ChangeTitleAction } from '../models/book.model';
import { Book } from '../../book.service';

export const changeTitleActionCreator = createAction(
  '[Book] changeTitle',
  props<ChangeTitleAction>()
);

export const bookSelector = createSelector(
  (state: any) => state.bookFeature as Book,
  (s) => s
);

export const bookReducer = createReducer<Book>(
  {
    id: 12,
    title: 'Angular Development',
    pages: 560,
    price: 800,
    edition: 18,
  },
  on(changeTitleActionCreator, (state: Book, action: any) => {
    const newState = { ...state };

    //  apply the change on the clone
    newState.title = action.payload.newTitle;

    //  return the clone
    return newState;
  })
);
