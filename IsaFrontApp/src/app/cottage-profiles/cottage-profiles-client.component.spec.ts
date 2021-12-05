import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageProfilesClientComponent } from './cottage-profiles-client.component';

describe('CottageProfilesClientComponent', () => {
  let component: CottageProfilesClientComponent;
  let fixture: ComponentFixture<CottageProfilesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageProfilesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageProfilesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
