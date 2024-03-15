import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBlockComponent } from '../add-block/add-block.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(public api: ApiService, public dia: MatDialog) {}
  boolFun(e: any) {
    this.dia.open(AddBlockComponent);
  }
}
