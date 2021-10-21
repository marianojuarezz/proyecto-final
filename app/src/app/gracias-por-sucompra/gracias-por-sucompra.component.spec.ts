import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraciasPorSucompraComponent } from './gracias-por-sucompra.component';

describe('GraciasPorSucompraComponent', () => {
  let component: GraciasPorSucompraComponent;
  let fixture: ComponentFixture<GraciasPorSucompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraciasPorSucompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraciasPorSucompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
