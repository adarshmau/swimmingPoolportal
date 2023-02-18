import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListspComponent } from './listsp.component';

describe('ListspComponent', () => {
  let component: ListspComponent;
  let fixture: ComponentFixture<ListspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
