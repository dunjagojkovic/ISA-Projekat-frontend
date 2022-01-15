import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTermsAdventureComponent } from './free-terms-adventure.component';

describe('FreeTermsAdventureComponent', () => {
  let component: FreeTermsAdventureComponent;
  let fixture: ComponentFixture<FreeTermsAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTermsAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTermsAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
