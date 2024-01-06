import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirGaugeComponent } from './air-gauge.component';

describe('AirGaugeComponent', () => {
  let component: AirGaugeComponent;
  let fixture: ComponentFixture<AirGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirGaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
