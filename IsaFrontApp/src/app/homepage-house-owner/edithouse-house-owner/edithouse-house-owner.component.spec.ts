import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithouseHouseOwnerComponent } from './edithouse-house-owner.component';

describe('EdithouseHouseOwnerComponent', () => {
  let component: EdithouseHouseOwnerComponent;
  let fixture: ComponentFixture<EdithouseHouseOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithouseHouseOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithouseHouseOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
