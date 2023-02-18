import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspComponent } from './addsp.component';

describe('AddspComponent', () => {
  let component: AddspComponent;
  let fixture: ComponentFixture<AddspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
