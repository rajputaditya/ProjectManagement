import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import {Chart} from 'chart.js';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  chart= [];

  url:string;
  searchdata: Array<any>;
  searchEditProject() {
    this.searchdata = [];
    this.url = 'http://localhost:8080/search/' + (<HTMLInputElement>document.getElementById("searchProject")).value;
    console.log(this.url);
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.searchdata.push(element);
      });
    });
  }

  
  constructor(private _main:MainService, private http:HttpClient) { }

  ngOnInit() {
    this._main.emp()
    .subscribe(res =>
      {
        console.log(res);
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        console.log(weatherDates);
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: "red",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
                
              },
              {
                data: temp_min,
                borderColor: "blue",
                borderWidth:1,
                lineTension:0.2,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],

              },
            ]
          },
           options: {
               legend: {
                 display: true
               },
              scales: {
                 xAxes: [{
                  
                   display: true,
                   
 
                 }],
                 yAxes: [{
                   display: true
                 }],
               } 
             }
        });
        this.chart = new Chart('barchart', {
          type: 'bar',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp_max,
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
                data: temp_min,
                
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
        this.chart = new Chart('piechart', {
          type: 'pie',
          animationEnabled:true,
          axisX:{
            intervsl:10,
          },
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: temp_max,
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
                data: temp_min,
                
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
