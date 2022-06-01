import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProgrammeComponent } from './loyalty-programme.component';

describe('LoyaltyProgrammeComponent', () => {
  let component: LoyaltyProgrammeComponent;
  let fixture: ComponentFixture<LoyaltyProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
