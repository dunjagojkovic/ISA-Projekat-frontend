import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsBoatOwnerComponent } from './maps-boat-owner.component';

describe('MapsBoatOwnerComponent', () => {
  let component: MapsBoatOwnerComponent;
  let fixture: ComponentFixture<MapsBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
