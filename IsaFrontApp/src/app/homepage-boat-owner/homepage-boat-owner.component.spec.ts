import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBoatOwnerComponent } from './homepage-boat-owner.component';

describe('HomepageBoatOwnerComponent', () => {
  let component: HomepageBoatOwnerComponent;
  let fixture: ComponentFixture<HomepageBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
