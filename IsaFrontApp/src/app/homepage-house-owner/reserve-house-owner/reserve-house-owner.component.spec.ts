import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveHouseOwnerComponent } from './reserve-house-owner.component';

describe('ReserveHouseOwnerComponent', () => {
  let component: ReserveHouseOwnerComponent;
  let fixture: ComponentFixture<ReserveHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
