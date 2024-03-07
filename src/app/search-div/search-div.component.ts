import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-search-div',
  templateUrl: './search-div.component.html',
  styleUrl: './search-div.component.css',
})
export class SearchDivComponent {
  constructor(public api: ApiService) {}
  fun(e: any) {
    console.log(e.target.value);
    var regex = new RegExp(e.target.value, 'i');
    this.api.getBlock().subscribe(
      (res) => {
        this.api.details = res;
        console.log(regex);
        console.log(this.api.details);
        this.api.details = this.api.details.filter((res: any) =>
          regex.test(res.city)
        );
        console.log(this.api.details);
      },
      (err) => console.log(err)
    );
  }
  closed(search: any) {
    console.log(search);
    console.log(search.value);
    search.value = '';
    this.api.getBlock().subscribe(
      (res) => {
        this.api.details = res;

        console.log(this.api.details);
      },
      (err) => console.log(err)
    );
  }
}
