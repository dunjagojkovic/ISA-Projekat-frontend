import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFreeInstructorsClientComponent } from './search-free-instructors-client.component';

describe('SearchFreeInstructorsClientComponent', () => {
  let component: SearchFreeInstructorsClientComponent;
  let fixture: ComponentFixture<SearchFreeInstructorsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFreeInstructorsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFreeInstructorsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
