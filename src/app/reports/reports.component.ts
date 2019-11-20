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

    // BARCHART for employee last month progress
    this._main.getLastMonthProgressOfEmployees(new Date().getMonth())
      .subscribe(res => {
        this.jsonArray = res;

        // Gets all the employees for the last month
        this.jsonArray.forEach(employee => this.percentagesCompleted.push(employee.project_part_progress));
        this.jsonArray.forEach(employee => this.employeeNames.push(employee.emp_name));

        // DEBUG LOG
        console.log(this.percentagesCompleted);
        console.log(this.employeeNames);

        // Rendering data into Last month progress chart
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
              yAxes: [
                {
                  "ticks": { "beginAtZero": true }
                }],
            }
          }
        });

      });

    this._main.getMonthlyProgressOfEmployees(new Date().getMonth() + 1).subscribe(res => {

      let dataset: any = [];
      let months: any = [];
      let month = new Date().getMonth();
      for (let index = 1; index <= 6; index++) {
        months.push(month--);
      }

      let emps: any = res;
      emps.forEach(element => {
        let emp: any = element;
        emp.forEach(employee => this.employeeNames.push(employee.emp_name));
        dataset.push({
          label: empName,
          data: data,
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
        });

      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: months,
          datasets: dataset,
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [
              {
                display: true,
              }
            ],
            yAxes: [
              {
                "ticks": { "beginAtZero": true }
              }],
          }
        }
      });
    });
  }

}
