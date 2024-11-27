import { Component, inject, signal } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../../models/customer.model';
import { RestService } from '../rest.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  imports: [CustomerListComponent, CustomerDetailComponent, AsyncPipe, NgIf],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css',
})
export class CustomerPageComponent {
  private restService = inject(RestService);

  customers$ = this.restService.get<Customer[]>(
    'http://localhost:3000/customers'
  );

  selectedCustomer = signal<Customer | null>(null);

  handleCustomerSelection(customer: Customer) {
    this.selectedCustomer.update((_) => customer);
  }
}
