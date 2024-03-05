import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getBlock = () => {
    return this.httpClient
      .get<any>('https://65deec33ff5e305f32a0dd91.mockapi.io/api/home')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  };
  getSingleBlock = (id: any) => {
    return this.httpClient
      .get<any>('https://65deec33ff5e305f32a0dd91.mockapi.io/api/home/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  };
  details: any;

  filter(city: any) {
    this.getBlock().subscribe(
      (res: any) => {
        this.details = res.filter((data: any) => data.city === city);

        console.log(this.details);
      },
      (err: any) => {
        console.log(err);
      }
    );
    return this.details;
  }
  getdata = () => {
    this.getBlock().subscribe(
      (res: any) => {
        this.details = res;

        console.log(this.details);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };
}
