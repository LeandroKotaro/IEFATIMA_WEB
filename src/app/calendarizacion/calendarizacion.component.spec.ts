import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarizacionComponent } from './calendarizacion.component';

describe('CalendarizacionComponent', () => {
  let component: CalendarizacionComponent;
  let fixture: ComponentFixture<CalendarizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
