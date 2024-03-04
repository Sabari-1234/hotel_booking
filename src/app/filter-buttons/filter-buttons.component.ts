import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrl: './filter-buttons.component.css',
})
export class FilterButtonsComponent {
  @Input() name: any;
  @Input() city: any;

  @Input() apply: any;
  @Input() fireEvent: any;

  cityName: any;

  fun() {
    if (this.name === 'Apply') {
      this.apply(this.city);

      console.log('skksd');
    }
  }
}
