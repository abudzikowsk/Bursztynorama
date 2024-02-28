import {Component, Input, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";
import Chart from "chart.js/auto";
import {getChartConfig} from "../config/chart.config";
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-sea-temperature',
  standalone: true,
  imports: [
    PopupComponent
  ],
  templateUrl: './sea-temperature.component.html',
  styleUrl: './sea-temperature.component.scss'
})
export class SeaTemperatureComponent  implements OnInit {
  @Input() public data!: Observable<WeatherDataResponse[]>;
  public chart: any;
  public currentSeaTemperature: number = 0;

  ngOnInit(): void {
    this.data.subscribe((data) => {
      const labels = data.map(x => x.date);
      const dataPoints = data.map(x => x.seaTemperature);
      this.currentSeaTemperature = dataPoints[dataPoints.length - 1];
      this.chart?.destroy();
      this.createChart(labels, dataPoints);
    });
  }

  createChart(labels: string[], dataPoints: number[]){
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperatura morza',
        data: dataPoints,
        fill: false,
        borderColor: '#F4873C',
        tension: 0.1
      }]
    };

    const config = getChartConfig(data);

    this.chart = new Chart("sea-temperature-chart", config);
  }
}

