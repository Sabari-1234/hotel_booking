import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-sort-filter-btn',
  templateUrl: './mobile-sort-filter-btn.component.html',
  styleUrl: './mobile-sort-filter-btn.component.css',
})
export class MobileSortFilterBtnComponent {
  @Input() name!: any;
}
