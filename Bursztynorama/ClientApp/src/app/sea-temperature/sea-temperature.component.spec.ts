import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaTemperatureComponent } from './sea-temperature.component';

describe('SeaTemperatureComponent', () => {
  let component: SeaTemperatureComponent;
  let fixture: ComponentFixture<SeaTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeaTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeaTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
