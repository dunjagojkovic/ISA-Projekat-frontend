import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatProfilesClientComponent } from './boat-profiles-client.component';

describe('BoatProfilesClientComponent', () => {
  let component: BoatProfilesClientComponent;
  let fixture: ComponentFixture<BoatProfilesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatProfilesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatProfilesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
