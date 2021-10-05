import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamparaComponent } from './lampara.component';

describe('LamparaComponent', () => {
  let component: LamparaComponent;
  let fixture: ComponentFixture<LamparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamparaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
