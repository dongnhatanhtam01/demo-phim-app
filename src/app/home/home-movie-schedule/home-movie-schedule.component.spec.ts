import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMovieScheduleComponent } from './home-movie-schedule.component';

describe('HomeMovieScheduleComponent', () => {
  let component: HomeMovieScheduleComponent;
  let fixture: ComponentFixture<HomeMovieScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMovieScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMovieScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
