import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-location-sort',
  templateUrl: './location-sort.component.html',
  styleUrl: './location-sort.component.css',
})
export class LocationSortComponent implements OnInit {
  @Output() public childEvent = new EventEmitter();
  @Input() name: any;
  @Input() firstvalue: any;

  constructor(public api: ApiService) {}

  cityName: any;

  fireEvent = () => {
    this.childEvent.emit(this.cityName);

    console.log(this.cityName + 'event');
  };

  details: any;

  getData = () => {
    this.api.getBlock().subscribe(
      (res: any) => {
        this.details = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  ngOnInit(): void {
    this.cityName = this.firstvalue;
    this.fireEvent();
    this.getData();
  }
  getcity() {
    return this.cityName;
  }
  apply(city: any) {
    this.cityName = city;
    this.fireEvent();

    console.log(this.cityName);
  }
}
