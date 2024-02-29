import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css',
})
export class HomeBodyComponent implements OnInit {
  generateRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  constructor(public api: ApiService) {}

  details!: any;

  getdata = () => {
    this.api.getBlock().subscribe(
      (res: any) => {
        this.details = res;
        console.log(this.details);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };
  ngOnInit(): void {
    this.getdata();
  }
}
