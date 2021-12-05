import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHouseOwnerComponent } from './homepage-house-owner.component';

describe('HomepageHouseOwnerComponent', () => {
  let component: HomepageHouseOwnerComponent;
  let fixture: ComponentFixture<HomepageHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
