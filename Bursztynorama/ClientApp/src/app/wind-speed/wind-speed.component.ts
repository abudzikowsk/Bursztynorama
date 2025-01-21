import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartConfiguration} from "chart.js";
import {getChartConfig} from "../config/chart.config";
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-wind-speed',
  standalone: true,
    imports: [
        PopupComponent
    ],
  templateUrl: './wind-speed.component.html',
  styleUrl: './wind-speed.component.scss'
})
export class WindSpeedComponent implements OnInit {
  @Input() public data!: Observable<WeatherDataResponse[]>;
  public chart: any;
  public currentWindSpeed: number = 0;
  ngOnInit(): void {
      this.data.subscribe((data) => {
      const labels = data.map(x => x.date);
      const dataPoints = data.map(x => x.windSpeed);
      this.currentWindSpeed = dataPoints[dataPoints.length - 1];
      this.chart?.destroy();
      this.createChart(labels, dataPoints);
    });
  }

  createChart(labels: string[], dataPoints: number[]){
    const data = {
      labels: labels,
      datasets: [{
        label: 'Prędkość wiatru',
        data: dataPoints,
        fill: false,
        borderColor: '#F4873C',
        tension: 0.1
      }]
    };

    const config = getChartConfig(data);
    // @ts-ignore
    config.options.scales['y'].title.text = 'km/h';

    this.chart = new Chart("wind-speed-chart", config);
  }
}
