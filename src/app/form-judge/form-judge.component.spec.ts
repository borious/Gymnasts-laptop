import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJudgeComponent } from './form-judge.component';

describe('FormJudgeComponent', () => {
  let component: FormJudgeComponent;
  let fixture: ComponentFixture<FormJudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
