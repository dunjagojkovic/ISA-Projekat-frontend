import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHouseOwnerComponent } from './report-house-owner.component';

describe('ReportHouseOwnerComponent', () => {
  let component: ReportHouseOwnerComponent;
  let fixture: ComponentFixture<ReportHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
