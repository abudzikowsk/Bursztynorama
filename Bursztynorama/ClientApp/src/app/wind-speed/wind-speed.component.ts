import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-wind-speed',
  standalone: true,
  imports: [],
  templateUrl: './wind-speed.component.html',
  styleUrl: './wind-speed.component.scss'
})
export class WindSpeedComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    const labels = ["01.01", "02.01", "03.01", "04.01", "05.01", "06.01", "07.01"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Prędkość wiatru',
        data: [15, 29, 37, 42, 40, 45, 43],
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
              text: 'Km/h',
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

    this.chart = new Chart("wind-speed-chart", config);
  }
}
