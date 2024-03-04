import { Component, ViewChild, viewChild } from '@angular/core';
import { HomeBodyComponent } from '../home-body/home-body.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  cityFilter!: any;

  @ViewChild(HomeBodyComponent) homeBodyComponent:
    | HomeBodyComponent
    | undefined;
  constructor(public api: ApiService) {}

  cityChange(city: any) {
    this.cityFilter = city;
    console.log(city);
    //this.fun();
    //this.homeBodyComponent?.filter(data);
    // console.log(this.api.details);
    // const det = this.api.details.filter((data: any) => data.city == city);
    //this.api.details = det;
    //console.log(det);
    this.api.filter(city);
    console.log('hi');
  }
  fun() {
    console.log('how are you');
  }
}
