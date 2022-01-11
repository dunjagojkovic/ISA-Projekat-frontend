import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHouseOwnerComponent } from './review-house-owner.component';

describe('ReviewHouseOwnerComponent', () => {
  let component: ReviewHouseOwnerComponent;
  let fixture: ComponentFixture<ReviewHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
