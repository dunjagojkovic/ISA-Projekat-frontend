import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBoatOwnerComponent } from './history-boat-owner.component';

describe('HistoryBoatOwnerComponent', () => {
  let component: HistoryBoatOwnerComponent;
  let fixture: ComponentFixture<HistoryBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
