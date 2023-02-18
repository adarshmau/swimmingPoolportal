import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookspComponent } from './booksp.component';

describe('BookspComponent', () => {
  let component: BookspComponent;
  let fixture: ComponentFixture<BookspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
