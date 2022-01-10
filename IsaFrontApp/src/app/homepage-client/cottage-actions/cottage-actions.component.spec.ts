import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageActionsComponent } from './cottage-actions.component';

describe('CottageActionsComponent', () => {
  let component: CottageActionsComponent;
  let fixture: ComponentFixture<CottageActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
