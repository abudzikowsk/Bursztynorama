import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSpeedGaugeComponent } from './wind-speed-gauge.component';

describe('WindSpeedGaugeComponent', () => {
  let component: WindSpeedGaugeComponent;
  let fixture: ComponentFixture<WindSpeedGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindSpeedGaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindSpeedGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
