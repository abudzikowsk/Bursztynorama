import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-sea-temperature',
  standalone: true,
  imports: [],
  templateUrl: './sea-temperature.component.html',
  styleUrl: './sea-temperature.component.scss'
})
export class SeaTemperatureComponent  implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const labels = ["01.01", "02.01", "03.01", "04.01", "05.01", "06.01", "07.01"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperatura morza',
        data: [3, 3, 3, 3, 3, 3, 2.9],
        fill: false,
        borderColor: '#F4873C',
        tension: 0.1
      }]
    };

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

    this.chart = new Chart("sea-temperature-chart", config);
  }
}

