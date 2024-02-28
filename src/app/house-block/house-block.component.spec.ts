import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBlockComponent } from './house-block.component';

describe('HouseBlockComponent', () => {
  let component: HouseBlockComponent;
  let fixture: ComponentFixture<HouseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
