import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRightButtonComponent } from './house-right-button.component';

describe('HouseRightButtonComponent', () => {
  let component: HouseRightButtonComponent;
  let fixture: ComponentFixture<HouseRightButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseRightButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseRightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
