import { Component, Inject, inject } from '@angular/core';
import { NumberService } from '../number.service';
import { NUMBER_SERVICE } from '../app.config';

@Component({
  selector: 'app-number-output',
  standalone: true,
  imports: [],
  templateUrl: './number-output.component.html',
  styleUrl: './number-output.component.css',
})
export class NumberOutputComponent {
  numberService = inject(NUMBER_SERVICE);
  // constructor(@Inject(NUMBER_SERVICE) public numberService: NumberService) {}
}
