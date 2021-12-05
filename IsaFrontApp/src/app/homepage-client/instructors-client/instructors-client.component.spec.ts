import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsClientComponent } from './instructors-client.component';

describe('InstructorsClientComponent', () => {
  let component: InstructorsClientComponent;
  let fixture: ComponentFixture<InstructorsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
