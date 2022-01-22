import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatEvaluationsComponent } from './boat-evaluations.component';

describe('BoatEvaluationsComponent', () => {
  let component: BoatEvaluationsComponent;
  let fixture: ComponentFixture<BoatEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
