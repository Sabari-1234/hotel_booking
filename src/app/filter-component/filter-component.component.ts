import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.css',
})
export class FilterComponentComponent {
  @Input() name!: string;
  @Input() name2!: string;
}
