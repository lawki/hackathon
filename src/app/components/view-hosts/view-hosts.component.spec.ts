import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHostsComponent } from './view-hosts.component';

describe('ViewHostsComponent', () => {
  let component: ViewHostsComponent;
  let fixture: ComponentFixture<ViewHostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
