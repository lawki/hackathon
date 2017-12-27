import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalTeamwiseSubmissionsComponent } from './eval-teamwise-submissions.component';

describe('EvalTeamwiseSubmissionsComponent', () => {
  let component: EvalTeamwiseSubmissionsComponent;
  let fixture: ComponentFixture<EvalTeamwiseSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalTeamwiseSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalTeamwiseSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
