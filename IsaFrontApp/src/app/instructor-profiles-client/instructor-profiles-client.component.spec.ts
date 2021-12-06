import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorProfilesClientComponent } from './instructor-profiles-client.component';

describe('InstructorProfilesClientComponent', () => {
  let component: InstructorProfilesClientComponent;
  let fixture: ComponentFixture<InstructorProfilesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorProfilesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorProfilesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
