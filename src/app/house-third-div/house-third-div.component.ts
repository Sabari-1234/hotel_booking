import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-house-third-div',
  templateUrl: './house-third-div.component.html',
  styleUrl: './house-third-div.component.css',
})
export class HouseThirdDivComponent {
  @Input() id: any;
  constructor(public api: ApiService) {}
}
