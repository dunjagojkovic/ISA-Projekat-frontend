import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorComplaintsComponent } from './instructor-complaints.component';

describe('InstructorComplaintsComponent', () => {
  let component: InstructorComplaintsComponent;
  let fixture: ComponentFixture<InstructorComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
