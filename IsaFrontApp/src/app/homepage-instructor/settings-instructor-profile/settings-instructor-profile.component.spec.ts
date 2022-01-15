import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInstructorProfileComponent } from './settings-instructor-profile.component';

describe('SettingsInstructorProfileComponent', () => {
  let component: SettingsInstructorProfileComponent;
  let fixture: ComponentFixture<SettingsInstructorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsInstructorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsInstructorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
