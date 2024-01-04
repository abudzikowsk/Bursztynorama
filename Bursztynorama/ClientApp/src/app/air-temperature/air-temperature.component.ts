import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ChartConfiguration} from "chart.js";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-air-temperature',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './air-temperature.component.html',
  styleUrl: './air-temperature.component.scss'
})
export class AirTemperatureComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const labels = ["01.01", "02.01", "03.01", "04.01", "05.01", "06.01", "07.01"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperatura powietrza',
        data: [2, 3, 2, 2, 0, 0, -1],
        fill: false,
        borderColor: '#F4873C',
        tension: 0.1
      }]
    };

    // @ts-ignore
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Data',
              color: '#FBFAEA',
            },
            grid: {
              color: '#FBFAEA'
            },
            ticks: {
              color: '#FBFAEA'
            }
          },
          y: {
            title: {
              display: true,
              text: '°C',
              color: '#FBFAEA'
            },
            grid: {
              color: '#FBFAEA'
            },
            ticks: {
              color: '#FBFAEA'
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#FBFAEA'
            }
          }
        }
      }
    };

    this.chart = new Chart("air-temperature-chart", config);
  }
}

