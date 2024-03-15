import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrl: './add-block.component.css',
})
export class AddBlockComponent {
  constructor(public api: ApiService) {}
  AddBlock(form: any) {
    console.log(form);

    const id = this.api.details.length;
    console.log(id);
    this.api
      .postData(
        JSON.stringify({
          ...form,
          image: 'https://loremflickr.com/640/480/city',
          favorite: true,
          rating: '0',
          id: String(id + 1),
        })
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.api.getdata();
          // this.api.getUniqueData();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
