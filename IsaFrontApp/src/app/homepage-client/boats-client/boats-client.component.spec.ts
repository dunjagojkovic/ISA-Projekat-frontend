import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsClientComponent } from './boats-client.component';

describe('BoatsClientComponent', () => {
  let component: BoatsClientComponent;
  let fixture: ComponentFixture<BoatsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
