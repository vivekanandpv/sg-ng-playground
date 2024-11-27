import { Component } from '@angular/core';
import { CustomerPageComponent } from './customer-page/customer-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
