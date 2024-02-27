import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmallCompComponent } from './header-small-comp.component';

describe('HeaderSmallCompComponent', () => {
  let component: HeaderSmallCompComponent;
  let fixture: ComponentFixture<HeaderSmallCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSmallCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSmallCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
