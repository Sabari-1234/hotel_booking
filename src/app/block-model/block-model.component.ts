import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-block-model',
  templateUrl: './block-model.component.html',
  styleUrl: './block-model.component.css',
})
export class BlockModelComponent implements OnInit {
  constructor(public api: ApiService, private route: ActivatedRoute) {}
  id: any;
  data: any;
  singleBlock = true;

  getdata() {
    this.api.getSingleBlock(this.id).subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getdata();
    });
  }
}
