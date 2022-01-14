import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBoatOwnerComponent } from './review-boat-owner.component';

describe('ReviewBoatOwnerComponent', () => {
  let component: ReviewBoatOwnerComponent;
  let fixture: ComponentFixture<ReviewBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
