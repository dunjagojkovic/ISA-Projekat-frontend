import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveCottagesStandardComponent } from './reserve-cottages-standard.component';

describe('ReserveCottagesStandardComponent', () => {
  let component: ReserveCottagesStandardComponent;
  let fixture: ComponentFixture<ReserveCottagesStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveCottagesStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveCottagesStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
