import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-small-comp',
  templateUrl: './header-small-comp.component.html',
  styleUrl: './header-small-comp.component.css',
})
export class HeaderSmallCompComponent {
  @Input() para!: any;
  @Input() icon!: string;
}
