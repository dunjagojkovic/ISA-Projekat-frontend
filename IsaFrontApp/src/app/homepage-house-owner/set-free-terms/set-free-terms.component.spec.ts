import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFreeTermsComponent } from './set-free-terms.component';

describe('SetFreeTermsComponent', () => {
  let component: SetFreeTermsComponent;
  let fixture: ComponentFixture<SetFreeTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetFreeTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFreeTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
