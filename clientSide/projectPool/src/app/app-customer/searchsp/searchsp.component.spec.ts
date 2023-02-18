import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchspComponent } from './searchsp.component';

describe('SearchspComponent', () => {
  let component: SearchspComponent;
  let fixture: ComponentFixture<SearchspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
