import {AfterViewInit, Component} from '@angular/core';
import {RadialGauge} from "canvas-gauges";

@Component({
  selector: 'app-air-temperature-gauge',
  standalone: true,
  imports: [],
  templateUrl: './air-temperature-gauge.component.html',
  styleUrl: './air-temperature-gauge.component.scss'
})
export class AirTemperatureGaugeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const gauge = new RadialGauge({
      renderTo: 'gauge-area',
      width: 300,
      height: 300,
      units: "°C",
      title: "Temperatura powietrza",
      valueBox: false,
      minValue: -50,
      maxValue: 50,
      majorTicks: [
        -50,
        -40,
        -30,
        -20,
        -10,
        0,
        10,
        20,
        30,
        40,
        50
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights: [
        {
          "from": -50,
          "to": 0,
          "color": "#82C6D4" // color for negative temperatures
        },
        {
          "from": 0,
          "to": 50,
          "color": "#F4873C" // color for positive temperatures
        }
      ],
      colorMajorTicks: "#FBFAEA",
      colorMinorTicks: "#FBFAEA",
      colorTitle: "#FBFAEA",
      colorUnits: "#FBFAEA",
      colorNumbers: "#FBFAEA",
      colorPlate: "#2E3C47", // background color
      colorBorderShadow: "#2E3C47",
      colorBorderOuter: "#2E3C47",
      colorBorderOuterEnd: "#2E3C47",
      colorBorderMiddle: "#2E3C47",
      colorBorderMiddleEnd: "#2E3C47",
      colorBorderInner: "#2E3C47",
      colorBorderInnerEnd: "#2E3C47",
      colorNeedle: "#FBFAEA",
      colorNeedleShadowDown: "#2E3C47",
      colorNeedleCircleOuter: "#FBFAEA",
      colorNeedleCircleOuterEnd: "#FBFAEA",
      colorNeedleCircleInner: "#FBFAEA",
      colorNeedleCircleInnerEnd: "#FBFAEA",
      colorValueBoxRect: "#2E3C47",
      colorValueBoxRectEnd: "#2E3C47",
      fontNumbers: "Montserrat, sans-serif",
      fontTitle: "Montserrat, sans-serif",
    }).draw();

    gauge.value = -2.3;
  }
}
