import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEvaluationsComponent } from './instructor-evaluations.component';

describe('InstructorEvaluationsComponent', () => {
  let component: InstructorEvaluationsComponent;
  let fixture: ComponentFixture<InstructorEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
