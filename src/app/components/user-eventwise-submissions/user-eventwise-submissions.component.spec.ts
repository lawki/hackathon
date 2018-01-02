import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventwiseSubmissionsComponent } from './user-eventwise-submissions.component';

describe('UserEventwiseSubmissionsComponent', () => {
  let component: UserEventwiseSubmissionsComponent;
  let fixture: ComponentFixture<UserEventwiseSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventwiseSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventwiseSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
