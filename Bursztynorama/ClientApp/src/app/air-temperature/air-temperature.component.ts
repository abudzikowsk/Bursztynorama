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

  MONTHS = [
    '2023-01-01 15:30:00',
    '2023-01-01 16:30:00',
    '2023-01-01 17:30:00',
    '2023-01-01 18:30:00',
    '2023-01-01 19:30:00',
    '2023-01-01 20:30:00',
    '2023-01-01 21:30:00',
  ];

  //@ts-ignore
  private months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = this.MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  }

  createChart(){
    const labels = ["01.01", "02.01", "03.01", "04.01", "05.01", "06.01", "07.01"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Temperatura powietrza',
        data: [2, 3, 2, 3, 1, 0, -1],
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
              text: 'Czas',
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

