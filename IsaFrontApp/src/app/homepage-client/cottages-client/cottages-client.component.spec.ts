import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottagesClientComponent } from './cottages-client.component';

describe('CottagesClientComponent', () => {
  let component: CottagesClientComponent;
  let fixture: ComponentFixture<CottagesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottagesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottagesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
