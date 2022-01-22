import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsFromClientsComponent } from './evaluations-from-clients.component';

describe('EvaluationsFromClientsComponent', () => {
  let component: EvaluationsFromClientsComponent;
  let fixture: ComponentFixture<EvaluationsFromClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationsFromClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsFromClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
