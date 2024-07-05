import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegisterEventsComponent } from './show-register-events.component';

describe('ShowRegisterEventsComponent', () => {
  let component: ShowRegisterEventsComponent;
  let fixture: ComponentFixture<ShowRegisterEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRegisterEventsComponent]
    });
    fixture = TestBed.createComponent(ShowRegisterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
