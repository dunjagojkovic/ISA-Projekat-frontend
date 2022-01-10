import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveInstructorsStandardComponent } from './reserve-instructors-standard.component';

describe('ReserveInstructorsStandardComponent', () => {
  let component: ReserveInstructorsStandardComponent;
  let fixture: ComponentFixture<ReserveInstructorsStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveInstructorsStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveInstructorsStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
