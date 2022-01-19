import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewInstructorComponent } from './review-instructor.component';

describe('ReviewInstructorComponent', () => {
  let component: ReviewInstructorComponent;
  let fixture: ComponentFixture<ReviewInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
