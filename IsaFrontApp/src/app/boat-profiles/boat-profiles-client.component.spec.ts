import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatProfilesComponent } from './boat-profiles.component';

describe('BoatProfilesClientComponent', () => {
  let component: BoatProfilesComponent;
  let fixture: ComponentFixture<BoatProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
