import { Component, inject, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent implements OnInit {
  private restService = inject(RestService);

  ngOnInit(): void {
    this.restService
      .get<any>('https://jsonplaceholder.typicode.com/posts/100')
      .pipe(
        mergeMap((r) =>
          this.restService.get<any>(
            `https://jsonplaceholder.typicode.com/users/${r.userId}`
          )
        )
      )
      .subscribe({
        next: (r) => console.log('response', r),
      });
  }
}
