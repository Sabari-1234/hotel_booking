import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockModelComponent } from './block-model.component';

describe('BlockModelComponent', () => {
  let component: BlockModelComponent;
  let fixture: ComponentFixture<BlockModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
