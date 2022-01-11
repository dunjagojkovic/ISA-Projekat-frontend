import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatComplaintsComponent } from './boat-complaints.component';

describe('BoatComplaintsComponent', () => {
  let component: BoatComplaintsComponent;
  let fixture: ComponentFixture<BoatComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
