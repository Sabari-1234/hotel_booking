import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-right-button',
  templateUrl: './house-right-button.component.html',
  styleUrl: './house-right-button.component.css',
})
export class HouseRightButtonComponent {
  @Input() name: any;
  @Input() price: any;
  @Input() timing: any;
}
