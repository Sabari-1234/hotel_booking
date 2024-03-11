import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-header-small-comp',
  templateUrl: './header-small-comp.component.html',
  styleUrl: './header-small-comp.component.css',
})
export class HeaderSmallCompComponent {
  @Input() para!: any;
  @Input() icon!: string;
  constructor(public api: ApiService) {}
  addMenuBool = false;
  addMenu() {
    if (!this.addMenuBool) this.addMenuBool = true;
    else this.addMenuBool = false;
  }
}
