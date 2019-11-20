import { Component, OnInit } from '@angular/core';
import { MainService } from '../reports/main.service';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss']
})
export class GrowthComponent implements OnInit {

  Chart= [];

  constructor( private _main: MainService) { }

  ngOnInit() {
    //this._main.getLastMonthProgressOfEmployees(new Date().getMonth())
    //.subscribe(res =>
      //{
        //console.log(res);
       
      //   let temp_max = res['list'].map(res => res.main.temp_max);
      //   let temp_min = res['list'].map(res => res.main.temp_min);
      //   let alldates = res['list'].map(res => res.dt)

      //   let weatherDates = []
      //   alldates.forEach((res) => {
      //     let jsdate = new Date(res * 1000)
      //     weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      //   })
      //   console.log(weatherDates);
      //   this.Chart = new Chart('canvas', {
      //     type: 'bar',
      //     data: {
      //       labels: weatherDates,
      //       datasets: [
      //         {
      //           data: temp_max,
      //           borderColor: "red",
      //           borderWidth:1,
      //           lineTension:0.2,
      //           fill: true,
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
                
      //         },
      //         {
      //           data: temp_min,
      //           borderColor: "blue",
      //           borderWidth:1,
      //           lineTension:0.2,
      //           fill: true,
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],

      //         },
      //       ]
      //     },
      //      options: {
      //          legend: {
      //            display: true
      //          },
      //         scales: {
      //            xAxes: [{
                  
      //              display: true,
                   
 
      //            }],
      //            yAxes: [{
      //              display: true
      //            }],
      //          } 
      //        }
      //   })
      //   this.Chart = new Chart('barchart', {
      //     type: 'line',
      //     animationEnabled:true,
      //     axisX:{
      //       intervsl:10,
      //     },
      //     data: {
      //       labels: weatherDates,
      //       datasets: [
      //         { 
      //           data: temp_max,
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
      //         borderColor: [
      //             'rgba(255,99,132,1)',
      //             'rgba(54, 162, 235, 1)',
      //             'rgba(255, 206, 86, 1)',
      //             'rgba(75, 192, 192, 1)',
      //             'rgba(153, 102, 255, 1)',
      //             'rgba(255, 159, 64, 1)'
      //         ],
                
      //           fill: false
      //         },
      //         { 
      //           data: temp_min,
                
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
      //         borderColor: [
      //             'rgba(255,99,132,1)',
      //             'rgba(54, 162, 235, 1)',
      //             'rgba(255, 206, 86, 1)',
      //             'rgba(75, 192, 192, 1)',
      //             'rgba(153, 102, 255, 1)',
      //             'rgba(255, 159, 64, 1)'
      //         ],
      //           fill: false
      //         },
      //       ]
      //     },
      //     options: {
      //       legend: {
      //         display: true
      //       },
      //      scales: {
      //         xAxes: [{
               
      //           display: true
      //         }],
      //         yAxes: [{
      //           display: true
      //         }],
      //       } 
      //     } 
      //   });
      //   this.Chart = new Chart('piechart', {
      //     type: 'pie',
      //     animationEnabled:true,
      //     axisX:{
      //       intervsl:10,
      //     },
      //     data: {
      //       labels: weatherDates,
      //       datasets: [
      //         { 
      //           data: temp_max,
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
      //         borderColor: [
      //             'rgba(255,99,132,1)',
      //             'rgba(54, 162, 235, 1)',
      //             'rgba(255, 206, 86, 1)',
      //             'rgba(75, 192, 192, 1)',
      //             'rgba(153, 102, 255, 1)',
      //             'rgba(255, 159, 64, 1)'
      //         ],
                
      //           fill: true
      //         },
      //         { 
      //           data: temp_min,
                
      //           backgroundColor: [
      //             'rgba(255, 99, 132, 0.2)',
      //             'rgba(54, 162, 235, 0.2)',
      //             'rgba(255, 206, 86, 0.2)',
      //             'rgba(75, 192, 192, 0.2)',
      //             'rgba(153, 102, 255, 0.2)',
      //             'rgba(255, 159, 64, 0.2)'
      //         ],
      //         borderColor: [
      //             'rgba(255,99,132,1)',
      //             'rgba(54, 162, 235, 1)',
      //             'rgba(255, 206, 86, 1)',
      //             'rgba(75, 192, 192, 1)',
      //             'rgba(153, 102, 255, 1)',
      //             'rgba(255, 159, 64, 1)'
      //         ],
      //           fill: true
      //         },
      //       ]
      //     },
      //     options: {
      //       legend: {
      //         display: true
      //       },
      //      scales: {
      //         xAxes: [{
               
      //           display: true
      //         }],
      //         yAxes: [{
      //           display: true
      //         }],
      //       } 
      //     } 
      //   });
       //})
  }

}