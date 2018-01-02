import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalSubmitEvaluationFormComponent } from './eval-submit-evaluation-form.component';

describe('EvalSubmitEvaluationFormComponent', () => {
  let component: EvalSubmitEvaluationFormComponent;
  let fixture: ComponentFixture<EvalSubmitEvaluationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalSubmitEvaluationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalSubmitEvaluationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
