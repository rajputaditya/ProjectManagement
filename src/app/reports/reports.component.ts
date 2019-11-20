import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  chart = [];
  constructor(private _main: MainService) { }

  jsonArray: any = [];
  percentagesCompleted: number[] = [];
  employeeNames: any = [];

  ngOnInit() {
    this._main.emp()
      .subscribe(res => {

        this.jsonArray = res;
        console.log(this.jsonArray);

        this.jsonArray.forEach(employee => {
          console.log(employee.employee_name);
          this.percentagesCompleted.push(employee.project_part_progress);
          this.employeeNames.push(employee.employee_name);
        });
        
        this.chart = new Chart('barchart', {
          type: 'bar',
          data: {
            labels: this.employeeNames,
            datasets: [
              {
                data: this.percentagesCompleted,
                borderColor: "black",
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
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
              }],
              yAxes: [
                {
                  "ticks": { "beginAtZero": true }
                }],
            }
          }
        });
        let smDTS = [{
          label: "Akhil",
          data: [1,3,76,23,76,21,87],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],

          fill: true
        },
        {
          data: [32,76,45,98,34,1,55],

          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          fill: true
        }];
        this.chart = new Chart('canvas', {
          type: 'line',
          animationEnabled: true,
          axisX: {
            intervsl: 10,
          },
          data: {
            labels: ["Janaury","Febuary","March","April","May","June","July","August","September","October","November","December"],
            datasets: smDTS
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{

                display: true
              }],
              yAxes: [
                {
                  "ticks": { "beginAtZero": true }
                }],
            }
          }
        });
        this.chart = new Chart('piechart', {
          type: 'pie',
          animationEnabled: true,
          axisX: {
            intervsl: 10,
          },
          data: {
            labels: [],
            datasets: [
              {
                data: [],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],

                fill: true
              },
              {
                data: [],

                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{

                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });


      })

  }

}
