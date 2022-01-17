import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBoatOwnerComponent } from './reserve-boat-owner.component';

describe('ReserveBoatOwnerComponent', () => {
  let component: ReserveBoatOwnerComponent;
  let fixture: ComponentFixture<ReserveBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
