import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorRegisterComponent } from './evaluator-register.component';

describe('EvaluatorRegisterComponent', () => {
  let component: EvaluatorRegisterComponent;
  let fixture: ComponentFixture<EvaluatorRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
