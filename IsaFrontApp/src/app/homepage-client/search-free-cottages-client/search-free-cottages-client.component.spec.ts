import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFreeCottagesClientComponent } from './search-free-cottages-client.component';

describe('SearchFreeCottagesClientComponent', () => {
  let component: SearchFreeCottagesClientComponent;
  let fixture: ComponentFixture<SearchFreeCottagesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFreeCottagesClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFreeCottagesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
