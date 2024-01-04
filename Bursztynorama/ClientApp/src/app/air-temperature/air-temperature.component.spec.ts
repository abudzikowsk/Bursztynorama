import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTemperatureComponent } from './air-temperature.component';

describe('AirTemperatureComponent', () => {
  let component: AirTemperatureComponent;
  let fixture: ComponentFixture<AirTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
