import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTermsBoatsComponent } from './set-terms-boats.component';

describe('SetTermsBoatsComponent', () => {
  let component: SetTermsBoatsComponent;
  let fixture: ComponentFixture<SetTermsBoatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTermsBoatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTermsBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
