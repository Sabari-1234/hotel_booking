import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-house-block',
  templateUrl: './house-block.component.html',
  styleUrl: './house-block.component.css',
})
export class HouseBlockComponent {
  @Input() city: any;
  @Input() image: any;
  @Input() favorite: any;
  @Input() id: any;
  @Input() singleBlock: any;
  @Input() rating: any;
  @Input() price: any;
  @Input() property: any;
  @Input() distance: any;
  fillColor: any = 'red';
}
