import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTimelineComponent } from './incident-timeline.component';

describe('IncidentTimelineComponent', () => {
  let component: IncidentTimelineComponent;
  let fixture: ComponentFixture<IncidentTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
