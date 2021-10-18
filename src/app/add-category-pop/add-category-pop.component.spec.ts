import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryPopComponent } from './add-category-pop.component';

describe('AddCategoryPopComponent', () => {
  let component: AddCategoryPopComponent;
  let fixture: ComponentFixture<AddCategoryPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
