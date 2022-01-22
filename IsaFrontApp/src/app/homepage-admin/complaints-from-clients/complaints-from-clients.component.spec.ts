import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsFromClientsComponent } from './complaints-from-clients.component';

describe('ComplaintsFromClientsComponent', () => {
  let component: ComplaintsFromClientsComponent;
  let fixture: ComponentFixture<ComplaintsFromClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsFromClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsFromClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
