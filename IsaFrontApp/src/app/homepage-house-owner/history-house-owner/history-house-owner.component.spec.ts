import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryHouseOwnerComponent } from './history-house-owner.component';

describe('HistoryHouseOwnerComponent', () => {
  let component: HistoryHouseOwnerComponent;
  let fixture: ComponentFixture<HistoryHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
