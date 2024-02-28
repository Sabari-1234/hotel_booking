import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMapButtonComponent } from './sort-map-button.component';

describe('SortMapButtonComponent', () => {
  let component: SortMapButtonComponent;
  let fixture: ComponentFixture<SortMapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortMapButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortMapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
