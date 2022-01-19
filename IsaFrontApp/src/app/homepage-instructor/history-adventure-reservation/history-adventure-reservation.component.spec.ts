import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAdventureReservationComponent } from './history-adventure-reservation.component';

describe('HistoryAdventureReservationComponent', () => {
  let component: HistoryAdventureReservationComponent;
  let fixture: ComponentFixture<HistoryAdventureReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAdventureReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAdventureReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
