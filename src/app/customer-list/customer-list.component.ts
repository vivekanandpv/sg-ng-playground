import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  @Input() customers?: Customer[];
  @Output() customerSelected = new EventEmitter<Customer>();

  onCustomerSelect(customer: Customer) {
    this.customerSelected.emit(customer);
  }
}
