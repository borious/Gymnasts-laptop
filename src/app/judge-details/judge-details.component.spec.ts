import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeDetailsComponent } from './judge-details.component';

describe('JudgeDetailsComponent', () => {
  let component: JudgeDetailsComponent;
  let fixture: ComponentFixture<JudgeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
