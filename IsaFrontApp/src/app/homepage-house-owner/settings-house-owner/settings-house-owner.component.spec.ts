import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHouseOwnerComponent } from './settings-house-owner.component';

describe('SettingsHouseOwnerComponent', () => {
  let component: SettingsHouseOwnerComponent;
  let fixture: ComponentFixture<SettingsHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
