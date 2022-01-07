import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBoatsStandardComponent } from './reserve-boats-standard.component';

describe('ReserveBoatsStandardComponent', () => {
  let component: ReserveBoatsStandardComponent;
  let fixture: ComponentFixture<ReserveBoatsStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveBoatsStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveBoatsStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
