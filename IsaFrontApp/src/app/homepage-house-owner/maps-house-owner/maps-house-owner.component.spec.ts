import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsHouseOwnerComponent } from './maps-house-owner.component';

describe('MapsHouseOwnerComponent', () => {
  let component: MapsHouseOwnerComponent;
  let fixture: ComponentFixture<MapsHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
