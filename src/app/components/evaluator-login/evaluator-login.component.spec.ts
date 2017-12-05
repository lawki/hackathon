import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorLoginComponent } from './evaluator-login.component';

describe('EvaluatorLoginComponent', () => {
  let component: EvaluatorLoginComponent;
  let fixture: ComponentFixture<EvaluatorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
