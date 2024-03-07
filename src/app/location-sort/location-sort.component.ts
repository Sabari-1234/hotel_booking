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
  uniqueRatings: any;
  uniqueCities: any;
  uniqueProperties: any;
  uniqueDistances: any;
  uniquePrices: any;
  ngOnInit(): void {
    this.cityName = this.firstvalue;
    this.fireEvent();
    this.getData();
    this.uniqueRatings = Array.from(
      new Set(this.api.details.map((obj: any) => obj.rating))
    ).sort((a: any, b: any) => a - b);
    this.uniqueCities = Array.from(
      new Set(this.api.details.map((obj: any) => obj.city))
    ).sort();
    this.uniqueProperties = Array.from(
      new Set(this.api.details.map((obj: any) => obj.property))
    ).sort();
    this.uniqueDistances = Array.from(
      new Set(this.api.details.map((obj: any) => obj.distance))
    ).sort((a: any, b: any) => a - b);
    this.uniquePrices = Array.from(
      new Set(this.api.details.map((obj: any) => obj.price))
    ).sort((a: any, b: any) => a - b);
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
