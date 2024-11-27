import { Component, Inject, inject } from '@angular/core';
import { NumberService } from '../number.service';
import { NUMBER_SERVICE } from '../app.config';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css',
})
export class NumberInputComponent {
  numberService = inject(NUMBER_SERVICE);

  // constructor(@Inject(NUMBER_SERVICE) public numberService: NumberService) {}

  handleInput(el: HTMLInputElement) {
    const value = el.value;

    if (/^[0-9]{1,4}$/.test(value)) {
      this.numberService.enterNumber(+el.value);
      el.value = '';
    } else {
      alert('Invalid input');
    }
  }
}
