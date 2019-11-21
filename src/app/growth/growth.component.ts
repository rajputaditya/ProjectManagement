import { Component, OnInit } from '@angular/core';
import { MainService } from '../reports/main.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss']
})
export class GrowthComponent implements OnInit {

  chart = [];
  project_name: any = "AT&T";

  constructor(private _main: MainService) { }

  ngOnInit() {
    this._main.getMonthlyProgressOfProject(new Date().getMonth()+1, new Date().getFullYear(), this.project_name)
      .subscribe(res => {
        let jsonArray: any = res;
        let completed_tasks = [];
        let total_assigned_tasks = [];
        jsonArray.forEach(element => {
          completed_tasks.push(element.completed_tasks);
          total_assigned_tasks.push(element.total_assigned_tasks);
        });

        let months: any = [];
        let month = new Date().getMonth();
        for (let index = 1; index <= 6; index++) {
          months.push(month--);
        }

        // Rendering data into Last month progress chart
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: months,
            datasets: [
              {
                label: 'Completed Tasks',
                data: completed_tasks,
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                lineTension: 0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ]
              },
              {
                label: 'Total Tasks',
                data: total_assigned_tasks,
                borderColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
                lineTension: 0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
                ]
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  "ticks": { "beginAtZero": true }
                }],
            }
          }
        });

        // Rendering data into Last month progress chart
        this.chart = new Chart('piechart', {
          type: 'line',
          data: {
            labels: months,
            datasets: [
              {
                label: 'Completed Tasks',
                data: completed_tasks,
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                lineTension: 0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ]
              },
              {
                label: 'Total Tasks',
                data: total_assigned_tasks,
                borderColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
                lineTension: 0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
                ]
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  "ticks": { "beginAtZero": true }
                }],
            }
          }
        });
      })
  }

}