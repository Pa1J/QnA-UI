import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionPopComponent } from './add-question-pop.component';

describe('AddQuestionPopComponent', () => {
  let component: AddQuestionPopComponent;
  let fixture: ComponentFixture<AddQuestionPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestionPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
