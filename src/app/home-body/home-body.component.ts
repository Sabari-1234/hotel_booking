import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css',
})
export class HomeBodyComponent implements OnInit {
  @Input() cityFilter: any;

  constructor(public api: ApiService) {}

  //details: any;

  ngOnInit(): void {
    this.api.getdata();
  }
}
