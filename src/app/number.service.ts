import { Injectable, signal } from '@angular/core';

export class NumberService {
  nSquare = signal<number | null>(null);

  constructor(public message: string) {}

  enterNumber(n: number): void {
    this.nSquare.update((_) => this.square(n));
  }

  private square(n: number): number {
    return n * n;
  }
}
