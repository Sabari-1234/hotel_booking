import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-block',
  templateUrl: './house-block.component.html',
  styleUrl: './house-block.component.css',
})
export class HouseBlockComponent {
  @Input() city: any;
  @Input() image: any;
  @Input() favorite: any;
  fillColor: any = 'red';
}
