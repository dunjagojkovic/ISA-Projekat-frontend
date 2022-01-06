import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFreeBoatsClientComponent } from './search-free-boats-client.component';

describe('SearchFreeBoatsClientComponent', () => {
  let component: SearchFreeBoatsClientComponent;
  let fixture: ComponentFixture<SearchFreeBoatsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFreeBoatsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFreeBoatsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
