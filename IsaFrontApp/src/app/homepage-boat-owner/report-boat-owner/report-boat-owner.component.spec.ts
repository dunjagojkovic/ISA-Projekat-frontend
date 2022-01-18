import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBoatOwnerComponent } from './report-boat-owner.component';

describe('ReportBoatOwnerComponent', () => {
  let component: ReportBoatOwnerComponent;
  let fixture: ComponentFixture<ReportBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
