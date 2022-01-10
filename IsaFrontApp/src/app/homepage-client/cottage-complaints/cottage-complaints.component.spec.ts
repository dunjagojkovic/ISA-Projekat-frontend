import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageComplaintsComponent } from './cottage-complaints.component';

describe('CottageComplaintsComponent', () => {
  let component: CottageComplaintsComponent;
  let fixture: ComponentFixture<CottageComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
