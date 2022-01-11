import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageEvaluationsComponent } from './cottage-evaluations.component';

describe('CottageEvaluationsComponent', () => {
  let component: CottageEvaluationsComponent;
  let fixture: ComponentFixture<CottageEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
