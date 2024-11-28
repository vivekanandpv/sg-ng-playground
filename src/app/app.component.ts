import { Component } from '@angular/core';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomerPageComponent,
    PlaygroundComponent,
    BookDetailComponent,
    BookEditComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
