import { Component } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css',
})
export class HomeBodyComponent {
  generateRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
}
