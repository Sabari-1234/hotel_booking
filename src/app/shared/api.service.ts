import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getBlock = () => {
    return this.httpClient.get<any>('http://localhost:3000/home').pipe(
      map((res: any) => {
        return res;
      })
    );
  };
  getSingleBlock = (id: any) => {
    return this.httpClient.get<any>('http://localhost:3000/home/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  };
  details: any;

  filter(city: any) {
    this.getBlock().subscribe(
      (res: any) => {
        console.log(res.filter((data: any) => data.distance == city));

        if (res.filter((data: any) => data.city === city).length !== 0) {
          this.details = res.filter((data: any) => data.city === city);
        } else if (
          res.filter((data: any) => data.rating === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.rating === city);
        } else if (
          res.filter((data: any) => data.price === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.price === city);
        } else if (
          res.filter((data: any) => data.property === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.property === city);
        } else if (
          res.filter((data: any) => data.distance == city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.distance == city);
        }

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

  postData = (data: any) => {
    return this.httpClient.post<any>('http://localhost:3000/home', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  };
}
