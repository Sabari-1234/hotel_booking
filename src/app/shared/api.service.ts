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
  totalItems = 0;

  totalPages = 0;
  pageIndex = 0;
  pageSize = 20;
  getdata = () => {
    this.getBlock().subscribe(
      (res: any) => {
        this.details = res;
        this.totalItems = this.details.length;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        let startIndex = this.pageIndex * this.pageSize;
        let endIndex = startIndex + this.pageSize;
        this.details = this.details.slice(startIndex, endIndex);
        console.log(this.details);

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

  totalFun = (len = 1) => {
    this.getBlock().subscribe(
      (res: any) => {
        console.log(res);

        this.totalItems = res.length;
        if (len == 0) {
          this.totalItems = 0;
        }

        console.log(res);
      },
      (err: any) => {
        console.error(err);
      }
    );
  };
  forward() {
    this.totalFun();

    console.log((this.pageIndex + 1) * this.pageSize, this.totalItems);
    if ((this.pageIndex + 1) * this.pageSize < this.totalItems) {
      this.pageIndex += 1;

      this.getdata();
    }
  }

  backward(len = 1) {
    this.totalFun(len);
    if (this.pageIndex > 0) {
      this.pageIndex -= 1;

      this.getdata();
    }
  }
}
