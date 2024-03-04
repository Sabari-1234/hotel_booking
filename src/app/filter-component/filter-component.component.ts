import { Component, Input, Output } from '@angular/core';
import { FilterButtonsComponent } from '../filter-buttons/filter-buttons.component';
import { LocationSortComponent } from '../location-sort/location-sort.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrl: './filter-component.component.css',
})
export class FilterComponentComponent {
  @Input() name!: string;
  @Input() name2!: string;
  @Input() btnName!: string;
  @Input() formVal: any;
  @Input() cityChange: any;

  constructor(public api: ApiService) {}

  childdata(data: any) {
    this.btnName = data;
    if (data !== 'City center') {
      console.log(data + 'event');

      this.cityChange(data);
    } else {
      this.api.getdata();
    }
  }
}
