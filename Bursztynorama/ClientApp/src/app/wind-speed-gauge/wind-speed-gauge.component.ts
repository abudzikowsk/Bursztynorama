import {AfterViewInit, Component} from '@angular/core';
import {LinearGauge} from "canvas-gauges";

@Component({
  selector: 'app-wind-speed-gauge',
  standalone: true,
  imports: [],
  templateUrl: './wind-speed-gauge.component.html',
  styleUrl: './wind-speed-gauge.component.scss'
})
export class WindSpeedGaugeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const gauge = new LinearGauge({
      renderTo: 'wind-speed-gauge-area',
      title: "Prędkość wiatru",
      units: "km/h",
      width: 150,
      height: 400,
      minValue: 0,
      maxValue: 160,
      valueBox: false,
      majorTicks: [
        "0",
        "20",
        "40",
        "60",
        "80",
        "100",
        "120",
        "140",
        "160"
      ],
      minorTicks: 10,
      strokeTicks: true,
      colorPlate: "#2E3C47",
      highlights: [],
      borderShadowWidth: 0,
      borders: false,
      barBeginCircle: 0,
      tickSide: "left",
      numberSide: "left",
      needleSide: "left",
      needleType: "line",
      needleWidth: 3,
      colorNeedle: "#F4873C",
      colorNeedleEnd: "#F4873C",
      animationDuration: 1500,
      animationRule: "linear",
      barWidth: 5,
      ticksWidth: 50,
      ticksWidthMinor: 15,
      colorBar: "#FBFAEA",
      colorMinorTicks: "#FBFAEA",
      colorMajorTicks: "#FBFAEA",
      colorNumbers: "#FBFAEA",
      colorBarProgress: "#F4873C",
      fontNumbers: "Montserrat, sans-serif",
      fontTitle: "Montserrat, sans-serif",
      value: 75,
      colorTitle: "#FBFAEA",
      colorUnits: "#FBFAEA",
    }).draw();
  }
  value: number = 75;
}
