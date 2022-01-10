import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatActionsComponent } from './boat-actions.component';

describe('BoatActionsComponent', () => {
  let component: BoatActionsComponent;
  let fixture: ComponentFixture<BoatActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
