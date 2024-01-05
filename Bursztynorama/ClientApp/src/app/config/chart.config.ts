import {ChartConfiguration} from "chart.js";

export function getChartConfig(data: any): ChartConfiguration {
  return {
    type: 'line',
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Data',
            color: '#FBFAEA',
            font: {
              family: "Montserrat, sans-serif"
            }
          },
          grid: {
            color: '#FBFAEA',
          },
          ticks: {
            color: '#FBFAEA',
            font: {
              family: "Montserrat, sans-serif"
            }
          }
        },
        y: {
          title: {
            display: true,
            text: '°C',
            color: '#FBFAEA',
            font: {
              family: "Montserrat, sans-serif"
            }
          },
          grid: {
            color: '#FBFAEA'
          },
          ticks: {
            color: '#FBFAEA',
            font: {
              family: "Montserrat, sans-serif"
            }
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
}
