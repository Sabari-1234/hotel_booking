import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-block',
  templateUrl: './house-block.component.html',
  styleUrl: './house-block.component.css',
})
export class HouseBlockComponent {
  @Input() url: any;
}
