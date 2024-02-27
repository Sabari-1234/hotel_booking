import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() date!: string;
}
