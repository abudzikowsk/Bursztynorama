import {Component, Input, OnInit, Signal} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ChartConfiguration} from "chart.js";
import Chart from "chart.js/auto";
import {getChartConfig} from "../config/chart.config";
import {WeatherDataResponse} from "../models/weather-data.response";
import {Observable} from "rxjs";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-air-temperature',
  standalone: true,
  imports: [
    RouterOutlet,
    PopupComponent
  ],
  templateUrl: './air-temperature.component.html',
  styleUrl: './air-temperature.component.scss'
})
export class AirTemperatureComponent implements OnInit {
  @Input() public data!: Observable<WeatherDataResponse[]>;
  public chart: any;
  public currentTemperature: number = 0;

  ngOnInit(): void {
    this.data.subscribe((data) => {
      const labels = data.map(x => x.date);
      const dataPoints = data.map(x => x.airTemperature);
      this.currentTemperature = dataPoints[dataPoints.length - 1];
      this.chart?.destroy();
      this.createChart(labels, dataPoints);
    });
  }

  createChart(labels: string[], dataPoints: number[]){
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperatura powietrza',
        data: dataPoints,
        fill: false,
        borderColor: '#F4873C',
        tension: 0.1
      }]
    };

    const config = getChartConfig(data);

    this.chart = new Chart("air-temperature-chart", config);
  }
}

