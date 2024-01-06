import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTemperatureGaugeComponent } from './air-temperature-gauge.component';

describe('AirTemperatureGaugeComponent', () => {
  let component: AirTemperatureGaugeComponent;
  let fixture: ComponentFixture<AirTemperatureGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirTemperatureGaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirTemperatureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
