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
}
