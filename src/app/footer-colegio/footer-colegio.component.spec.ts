import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterColegioComponent } from './footer-colegio.component';

describe('FooterColegioComponent', () => {
  let component: FooterColegioComponent;
  let fixture: ComponentFixture<FooterColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
