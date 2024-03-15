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
  //filters: any;

  //similar elements
  // findSimilarObjects(array1: any, array2: any, key: any) {
  //   // Create an empty array to store the similar objects
  //   let similarObjects: any = [];
  //   console.log(array1, '  ', array2);
  //   // Iterate through the first array
  //   array1.forEach((obj1: any) => {
  //     // Check if the current object exists in the second array
  //     const matchingObject = array2.find(
  //       (obj2: any) => obj2[key] === obj1[key]
  //     );
  //     if (matchingObject) {
  //       // If it does, add it to the similarObjects array
  //       console.log(similarObjects);
  //       similarObjects.push(obj1);
  //     }
  //   });

  //   // Return the array containing the similar objects
  //   return similarObjects;
  // }
  boolVal = true;
  city: any;
  rating: any;
  price: any;
  property: any;
  distance: any;

  filter(city: any) {
    console.log(
      this.city,
      ' ',
      this.rating,
      ' ',
      this.property,
      ' ',
      this.distance,
      ' ',
      this.price
    );
    console.log(city);
    if (city == '₹90-₹45,000') {
      this.price = undefined;
      if (this.city) {
        city = this.city;
      } else if (this.rating) {
        city = this.rating;
      } else if (this.property) {
        city = this.property;
      } else if (this.distance) {
        city = this.distance;
      } else {
        this.getdata();
      }
    }
    if (city == 'All') {
      this.rating = undefined;
      if (this.city) {
        city = this.city;
      } else if (this.property) {
        city = this.property;
      } else if (this.price) {
        city = this.price;
      } else if (this.distance) {
        city = this.distance;
      } else {
        this.getdata();
      }
    }
    if (city == 'City center') {
      this.city = undefined;
      if (this.property) {
        city = this.property;
      } else if (this.rating) {
        city = this.rating;
      } else if (this.price) {
        city = this.price;
      } else if (this.distance) {
        city = this.distance;
      } else {
        this.getdata();
      }
    }
    if (city == 'Select') {
      this.property = undefined;
      if (this.city) {
        city = this.city;
      } else if (this.rating) {
        city = this.rating;
      } else if (this.price) {
        city = this.price;
      } else if (this.distance) {
        city = this.distance;
      } else {
        this.getdata();
      }
    }
    if (city == 'Select.') {
      this.distance = undefined;
      if (this.city) {
        city = this.city;
      } else if (this.rating) {
        city = this.rating;
      } else if (this.price) {
        city = this.price;
      } else if (this.property) {
        city = this.property;
      } else {
        this.getdata();
      }
    }

    console.log(city);
    this.getBlock().subscribe(
      (res: any) => {
        //console.log(res.filter((data: any) => data.distance == city));

        if (res.filter((data: any) => data.city === city).length !== 0) {
          this.details = res.filter((data: any) => data.city === city);
          this.city = city;

          if (this.price)
            this.details = this.details.filter(
              (data: any) => data.price === this.price
            );
          if (this.property)
            this.details = this.details.filter(
              (data: any) => data.property === this.property
            );
          if (this.rating)
            this.details = this.details.filter(
              (data: any) => data.rating === this.rating
            );
          if (this.distance)
            this.details = this.details.filter(
              (data: any) => data.distance === this.distance
            );
          //this.filters = this.details;
        } else if (
          res.filter((data: any) => data.rating === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.rating === city);
          this.rating = city;

          if (this.price)
            this.details = this.details.filter(
              (data: any) => data.price === this.price
            );
          if (this.property)
            this.details = this.details.filter(
              (data: any) => data.property === this.property
            );
          if (this.city)
            this.details = this.details.filter(
              (data: any) => data.city === this.city
            );
          if (this.distance)
            this.details = this.details.filter(
              (data: any) => data.distance === this.distance
            );
          //this.filters = this.details;
        } else if (
          res.filter((data: any) => data.price === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.price === city);
          this.price = city;

          if (this.rating)
            this.details = this.details.filter(
              (data: any) => data.rating === this.rating
            );
          if (this.property)
            this.details = this.details.filter(
              (data: any) => data.property === this.property
            );
          if (this.city)
            this.details = this.details.filter(
              (data: any) => data.city === this.city
            );
          if (this.distance)
            this.details = this.details.filter(
              (data: any) => data.distance === this.distance
            );
          // this.filters = this.details;
        } else if (
          res.filter((data: any) => data.property === city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.property === city);
          this.property = city;

          if (this.price)
            this.details = this.details.filter(
              (data: any) => data.price === this.price
            );
          if (this.rating)
            this.details = this.details.filter(
              (data: any) => data.rating === this.rating
            );
          if (this.city)
            this.details = this.details.filter(
              (data: any) => data.city === this.city
            );
          if (this.distance)
            this.details = this.details.filter(
              (data: any) => data.distance === this.distance
            );
          //this.filters = this.details;
        } else if (
          res.filter((data: any) => data.distance == city).length !== 0
        ) {
          this.details = res.filter((data: any) => data.distance == city);
          this.distance = city;

          if (this.price)
            this.details = this.details.filter(
              (data: any) => data.price === this.price
            );
          if (this.property)
            this.details = this.details.filter(
              (data: any) => data.property === this.property
            );
          if (this.city)
            this.details = this.details.filter(
              (data: any) => data.city === this.city
            );
          if (this.rating)
            this.details = this.details.filter(
              (data: any) => data.rating === this.rating
            );
          //this.filters = this.details;
        }
        // if (this.boolVal) {
        //   this.filters = this.details;
        //   this.boolVal = false;
        // }
        // this.filters = this.findSimilarObjects(
        //   this.details,
        //   this.filters,
        //   'id'
        // );
        // console.log(this.filters, '  ', this.details);

        // this.details = this.filters;

        console.log(this.details);
        console.log(this.boolVal);
        if (
          this.city ||
          this.rating ||
          this.property ||
          this.price ||
          this.distance
        ) {
          this.totalItems = this.details.length;
          this.totalPages = Math.ceil(this.totalItems / this.pageSize);
          let startIndex = this.pageIndex * this.pageSize;
          let endIndex = startIndex + this.pageSize;
          this.details = this.details.slice(startIndex, endIndex);
        } //else {
        //   this.count += 1;
        //   console.log(this.count);
        //   if (this.count == 5) this.boolVal = false;
        // }
      },
      (err: any) => {
        console.log(err);
      }
    );
    return this.details;
  }
  count = 0;
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
        this.getUniqueData();
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

  uniqueRatings: any;
  uniqueCities: any;
  uniqueProperties: any;
  uniqueDistances: any;
  uniquePrices: any;

  getUniqueData() {
    this.uniqueRatings = Array.from(
      new Set(this.details.map((obj: any) => obj.rating))
    ).sort((a: any, b: any) => a - b);
    this.uniqueCities = Array.from(
      new Set(this.details.map((obj: any) => obj.city))
    ).sort();
    this.uniqueProperties = Array.from(
      new Set(this.details.map((obj: any) => obj.property))
    ).sort();
    this.uniqueDistances = Array.from(
      new Set(this.details.map((obj: any) => obj.distance))
    ).sort((a: any, b: any) => a - b);
    this.uniquePrices = Array.from(
      new Set(this.details.map((obj: any) => obj.price))
    ).sort((a: any, b: any) => a - b);
  }
}
