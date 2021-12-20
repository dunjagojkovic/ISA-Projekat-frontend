import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientActivationComponent } from './client-activation.component';

describe('ClientActivationComponent', () => {
  let component: ClientActivationComponent;
  let fixture: ComponentFixture<ClientActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
