import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  bool: any = false;
  constructor(public api: ApiService) {}
  boolFun(e: any) {
    e.stopPropagation();
    this.bool = true;

    console.log(this.bool);
  }
  close(e: any) {
    e.stopPropagation();
    this.bool = false;
    console.log(this.bool);
  }
  child(e: any) {
    e.stopPropagation();
  }
}
