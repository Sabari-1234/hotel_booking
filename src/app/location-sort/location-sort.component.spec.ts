import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSortComponent } from './location-sort.component';

describe('LocationSortComponent', () => {
  let component: LocationSortComponent;
  let fixture: ComponentFixture<LocationSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
