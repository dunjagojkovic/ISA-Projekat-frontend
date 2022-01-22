import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsClientComponent } from './maps-client.component';

describe('MapsClientComponent', () => {
  let component: MapsClientComponent;
  let fixture: ComponentFixture<MapsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
