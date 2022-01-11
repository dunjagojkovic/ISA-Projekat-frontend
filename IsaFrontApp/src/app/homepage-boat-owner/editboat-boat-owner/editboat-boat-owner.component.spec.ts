import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditboatBoatOwnerComponent } from './editboat-boat-owner.component';

describe('EditboatBoatOwnerComponent', () => {
  let component: EditboatBoatOwnerComponent;
  let fixture: ComponentFixture<EditboatBoatOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditboatBoatOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditboatBoatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
