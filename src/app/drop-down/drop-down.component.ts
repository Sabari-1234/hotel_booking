import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
})
export class DropDownComponent {
  @Input() name: any;
  @Input() name1: any;
}
