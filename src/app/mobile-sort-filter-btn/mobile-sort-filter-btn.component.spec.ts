import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSortFilterBtnComponent } from './mobile-sort-filter-btn.component';

describe('MobileSortFilterBtnComponent', () => {
  let component: MobileSortFilterBtnComponent;
  let fixture: ComponentFixture<MobileSortFilterBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileSortFilterBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSortFilterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
