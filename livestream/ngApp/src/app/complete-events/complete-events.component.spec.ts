import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteEventsComponent } from './complete-events.component';

describe('completeEventsComponent', () => {
  let component: CompleteEventsComponent;
  let fixture: ComponentFixture<CompleteEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
