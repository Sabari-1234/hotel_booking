import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseThirdDivComponent } from './house-third-div.component';

describe('HouseThirdDivComponent', () => {
  let component: HouseThirdDivComponent;
  let fixture: ComponentFixture<HouseThirdDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseThirdDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseThirdDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
