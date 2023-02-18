import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallbookingComponent } from './listallbooking.component';

describe('ListallbookingComponent', () => {
  let component: ListallbookingComponent;
  let fixture: ComponentFixture<ListallbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
