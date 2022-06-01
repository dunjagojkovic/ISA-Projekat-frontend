import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePredefinedAdminComponent } from './home-page-predefined-admin.component';

describe('HomePagePredefinedAdminComponent', () => {
  let component: HomePagePredefinedAdminComponent;
  let fixture: ComponentFixture<HomePagePredefinedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagePredefinedAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePredefinedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
