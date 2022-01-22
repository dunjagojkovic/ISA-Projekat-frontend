import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInstructorComponent } from './report-instructor.component';

describe('ReportInstructorComponent', () => {
  let component: ReportInstructorComponent;
  let fixture: ComponentFixture<ReportInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
