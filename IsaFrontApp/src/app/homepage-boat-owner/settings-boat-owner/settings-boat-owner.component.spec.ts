import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBoatOwnerComponent } from './settings-boat-owner.component';

describe('SettingsBoatOwnerComponent', () => {
  let component: SettingsBoatOwnerComponent;
  let fixture: ComponentFixture<SettingsBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
